import { useState, useEffect } from 'react';
import { GITHUB_USERNAME, GITHUB_API_BASE } from '../data/github.js';

const CACHE_KEY = 'github_data_cache';
const CACHE_TTL = 60 * 60 * 1000;

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const AUTH_HEADERS = {
  Accept: 'application/vnd.github.v3+json',
  ...(TOKEN ? { Authorization: `token ${TOKEN}` } : {}),
};

async function fetchWithRetry(url, options, maxRetries = 3) {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      if (response.status === 401 || response.status === 403) {
        console.error(`[GitHub API] Authentication failed (${response.status}): Invalid or expired token`);
        return { response, authError: true };
      }
      
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After') || 2;
        console.warn(`[GitHub API] Rate limited. Waiting ${retryAfter}s before retry ${attempt}/${maxRetries}`);
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        continue;
      }
      
      return { response, authError: false };
    } catch (err) {
      lastError = err;
      console.warn(`[GitHub API] Request failed (attempt ${attempt}/${maxRetries}): ${err.message}`);
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  }
  throw lastError;
}

export function useGitHubData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          setData(parsed.data);
          setLoading(false);
          return;
        }
      } catch { }
    }

    async function fetchData() {
      setLoading(true);
      setError(null);

      const isAuth = !!TOKEN;
      const errors = [];
      let profile = null;
      let repos = [];
      let publicEvents = [];
      let allEvents = [];

      // Fetch profile - critical for rendering
      try {
        const { response, authError: authFailed } = await fetchWithRetry(
          `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`,
          { headers: AUTH_HEADERS }
        );
        
        if (authFailed) {
          setAuthError(true);
          setError('GitHub token is invalid or expired. Please update REACT_APP_GITHUB_TOKEN in .env');
          localStorage.removeItem(CACHE_KEY);
          setLoading(false);
          return;
        }
        
        if (response.ok) {
          profile = await response.json();
        } else {
          const errorMsg = `Profile request failed (${response.status})`;
          console.error(`[GitHub API] ${errorMsg}`);
          errors.push(errorMsg);
        }
      } catch (err) {
        const errorMsg = `Profile request failed: ${err.message}`;
        console.error(`[GitHub API] ${errorMsg}`);
        errors.push(errorMsg);
      }

      // Fetch repos - non-critical, can render without
      try {
        const reposUrl = isAuth
          ? `${GITHUB_API_BASE}/user/repos?per_page=100&sort=updated`
          : `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100`;
        const { response, authError: authFailed } = await fetchWithRetry(reposUrl, { headers: AUTH_HEADERS });
        
        if (authFailed) {
          setAuthError(true);
          setError('GitHub token is invalid or expired. Please update REACT_APP_GITHUB_TOKEN in .env');
          localStorage.removeItem(CACHE_KEY);
          setLoading(false);
          return;
        }
        
        if (response.ok) {
          repos = await response.json();
        } else {
          const errorMsg = `Repos request failed (${response.status})`;
          console.error(`[GitHub API] ${errorMsg}`);
          errors.push(errorMsg);
        }
      } catch (err) {
        const errorMsg = `Repos request failed: ${err.message}`;
        console.error(`[GitHub API] ${errorMsg}`);
        errors.push(errorMsg);
      }

      // Fetch public events - non-critical
      try {
        const publicEventsUrl = isAuth
          ? `${GITHUB_API_BASE}/user/events/public?per_page=100`
          : `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events/public?per_page=100`;
        const { response, authError: authFailed } = await fetchWithRetry(publicEventsUrl, { headers: AUTH_HEADERS });
        
        if (authFailed) {
          setAuthError(true);
          setError('GitHub token is invalid or expired. Please update REACT_APP_GITHUB_TOKEN in .env');
          localStorage.removeItem(CACHE_KEY);
          setLoading(false);
          return;
        }
        
        if (response.ok) {
          publicEvents = await response.json();
        } else {
          const errorMsg = `Public events request failed (${response.status})`;
          console.error(`[GitHub API] ${errorMsg}`);
          errors.push(errorMsg);
        }
      } catch (err) {
        const errorMsg = `Public events request failed: ${err.message}`;
        console.error(`[GitHub API] ${errorMsg}`);
        errors.push(errorMsg);
      }

      // Fetch all events (auth-only) - non-critical
      if (isAuth) {
        try {
          const { response, authError: authFailed } = await fetchWithRetry(
            `${GITHUB_API_BASE}/user/events?per_page=100`,
            { headers: AUTH_HEADERS }
          );
          
          if (!authFailed && response.ok) {
            allEvents = await response.json();
          } else if (!authFailed && !response.ok) {
            const errorMsg = `All events request failed (${response.status}), using public events only`;
            console.warn(`[GitHub API] ${errorMsg}`);
            allEvents = publicEvents;
          } else {
            allEvents = publicEvents;
          }
        } catch (err) {
          const errorMsg = `All events request failed: ${err.message}, using public events only`;
          console.warn(`[GitHub API] ${errorMsg}`);
          allEvents = publicEvents;
        }
      } else {
        allEvents = publicEvents;
      }

      // If we have at least profile data, render partial data
      if (profile) {
        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);
        const totalPrivate = repos.filter((r) => r.private).length;

        const recentPushes = allEvents.filter((e) => e.type === 'PushEvent').length;
        const recentPRs = allEvents.filter((e) => e.type === 'PullRequestEvent').length;

        const activityByDate = {};
        allEvents.forEach((event) => {
          const date = event.created_at.split('T')[0];
          activityByDate[date] = (activityByDate[date] || 0) + 1;
        });

        const processData = {
          profile: {
            avatar: profile.avatar_url,
            name: profile.name || profile.login,
            bio: profile.bio,
            publicRepos: profile.public_repos,
            followers: profile.followers,
            following: profile.following,
            totalStars,
            totalForks,
            totalPrivate,
          },
          stats: {
            totalRepos: repos.length,
            publicRepos: profile.public_repos,
            privateRepos: totalPrivate,
            totalStars,
            followers: profile.followers,
            recentActivity: allEvents.length,
            recentPushes,
            recentPRs,
          },
          activityByDate,
          recentEvents: publicEvents.slice(0, 10).map((event) => ({
            type: event.type,
            repo: event.repo?.name?.replace(`${GITHUB_USERNAME}/`, '') || '',
            date: event.created_at,
            action:
              event.type === 'PushEvent'
                ? `Pushed ${event.payload?.commits?.length || 1} commit(s)`
                : event.type === 'PullRequestEvent'
                ? `${event.payload?.action} a pull request`
                : event.type === 'IssuesEvent'
                ? `${event.payload?.action} an issue`
                : event.type === 'WatchEvent'
                ? 'Starred a repository'
                : event.type === 'ForkEvent'
                ? 'Forked a repository'
                : event.type === 'CreateEvent'
                ? `Created ${event.payload?.ref_type || 'resource'}`
                : event.type,
          })),
          repos: repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 8)
            .map((r) => ({
              name: r.name,
              description: r.description,
              stars: r.stargazers_count,
              forks: r.forks_count,
              language: r.language,
              url: r.html_url,
              private: r.private,
            })),
        };

        setData(processData);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: processData, timestamp: Date.now() })
        );
        
        if (errors.length > 0) {
          setError(`Partial data loaded. ${errors.length} endpoint(s) failed: ${errors.join('; ')}`);
        }
      } else {
        // No profile data - complete failure
        const errorMsg = errors.length > 0 
          ? `Unable to load GitHub data: ${errors.join('; ')}`
          : 'Unable to load GitHub profile data';
        setError(errorMsg);
        localStorage.removeItem(CACHE_KEY);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return { data, loading, error, authError };
}
