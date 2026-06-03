import React from 'react';
import { Github, Star, GitCommit, Lock } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { useGitHubData } from '../../hooks/useGitHubData.js';

function StatCard({ icon: Icon, label, value, loading }) {
  return (
    <GlassCard hover={true} className="p-4 text-center">
      <Icon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
      <div className="text-2xl font-bold text-[var(--color-foreground)]">
        {loading ? '---' : value}
      </div>
      <div className="text-xs text-[var(--color-muted-foreground)]">{label}</div>
    </GlassCard>
  );
}

function ActivityHeatmap({ activityByDate }) {
  const weeks = 12;
  const today = new Date();
  const days = [];

  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    const count = activityByDate[dateStr] || 0;
    days.push({ date: dateStr, count });
  }

  const getOpacity = (count) => {
    if (count === 0) return 0.2;
    if (count <= 1) return 0.4;
    if (count <= 3) return 0.7;
    return 1;
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-[400px]" style={{ flexWrap: 'wrap', flexDirection: 'column', height: `${7 * 14}px` }}>
        {Array.from({ length: weeks }, (_, weekIdx) => (
          <div key={weekIdx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {days.slice(weekIdx * 7, (weekIdx + 1) * 7).map((day) => (
              <div
                key={day.date}
                className="w-[10px] h-[10px] rounded-[2px]"
                title={`${day.date}: ${day.count} event(s)`}
                style={{
                  backgroundColor: 'var(--color-accent)',
                  opacity: getOpacity(day.count),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubActivity() {
  const { data, loading, error, authError } = useGitHubData();
  return (
    <section id="github" className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="GitHub Activity"
            subtitle="What I've been working on"
          />
        </AnimatedSection>
        <AnimatedSection variants={staggerContainer}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Github} label="Total Repos" value={data?.stats.totalRepos ?? 0} loading={loading} />
            <StatCard icon={Lock} label="Private" value={data?.stats.privateRepos ?? 0} loading={loading} />
            <StatCard icon={Star} label="Total Stars" value={data?.stats.totalStars ?? 0} loading={loading} />
            <StatCard icon={GitCommit} label="Recent Pushes" value={data?.stats.recentPushes ?? 0} loading={loading} />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <GlassCard hover={false} className="p-6">
            <h3 className="text-sm font-medium text-[var(--color-muted-foreground)] mb-4">
              Activity (last 12 weeks)
            </h3>
            {authError ? (
              <div className="text-center py-4">
                <p className="text-sm text-red-500 font-medium">{error}</p>
              </div>
            ) : error && !data ? (
              <div className="text-center py-4">
                <p className="text-sm text-[var(--color-muted-foreground)]">{error}</p>
              </div>
            ) : error && data ? (
              <div>
                <p className="text-xs text-yellow-600 mb-2">{error}</p>
                <ActivityHeatmap activityByDate={data.activityByDate} />
              </div>
            ) : loading ? (
              <div className="h-[100px] bg-[var(--color-muted)] rounded animate-pulse" />
            ) : data ? (
              <ActivityHeatmap activityByDate={data.activityByDate} />
            ) : null}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
