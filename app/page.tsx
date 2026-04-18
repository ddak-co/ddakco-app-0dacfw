'use client';

import { BarChart3, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

type StatItem = {
  label: string;
  value: number;
  icon: typeof BarChart3;
};

type RecentJob = {
  id: number;
  title: string;
  department: string;
  status: 'active' | 'closed';
};

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<StatItem[]>([]);
  const [recentJobs, setRecentJobs] = useState<RecentJob[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const statsData: StatItem[] = [
          { label: '총 채용공고', value: 12, icon: BarChart3 },
          { label: '지원자', value: 156, icon: Users },
          { label: '합격', value: 89, icon: CheckCircle },
          { label: '불합격', value: 67, icon: AlertCircle },
        ];

        const jobsData: RecentJob[] = [
          { id: 1, title: '경력사원 - 1', department: '개발팀', status: 'active' },
          { id: 2, title: '경력사원 - 2', department: '개발팀', status: 'active' },
          { id: 3, title: '경력사원 - 3', department: '개발팀', status: 'closed' },
        ];

        setStats(statsData);
        setRecentJobs(jobsData);
      } catch {
        setError('데이터를 불러올 수 없습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const StatCardSkeleton = () => (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="skeleton h-4 w-24 mb-3"></div>
          <div className="skeleton h-8 w-16"></div>
        </div>
        <div className="skeleton h-10 w-10 rounded"></div>
      </div>
    </div>
  );

  const JobItemSkeleton = () => (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div className="flex-1">
        <div className="skeleton h-4 w-32 mb-2"></div>
        <div className="skeleton h-3 w-24"></div>
      </div>
      <div className="skeleton h-6 w-20 rounded"></div>
    </div>
  );

  return (
    <div className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">오류 발생</p>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
          : stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="card p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                      <p className="text-3xl font-bold mt-2 text-gray-900">{stat.value}</p>
                    </div>
                    <Icon className="w-10 h-10 text-blue-500 flex-shrink-0" />
                  </div>
                </div>
              );
            })}
      </div>

      <div className="card">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">최근 채용공고</h2>
        </div>

        {isLoading ? (
          <div className="divide-y divide-gray-100">
            {Array.from({ length: 3 }).map((_, i) => (
              <JobItemSkeleton key={i} />
            ))}
          </div>
        ) : recentJobs.length === 0 ? (
          <div className="p-12 text-center">
            <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium mb-2">채용공고가 없습니다</p>
            <p className="text-gray-500 text-sm mb-6">새로운 채용공고를 등록해주세요.</p>
            <button className="btn-primary">
              채용공고 등록
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{job.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{job.department}</p>
                </div>
                <span
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    job.status === 'active'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {job.status === 'active' ? '진행중' : '마감'}
                </span>
              </div>
            ))}
          </div>
        )}

        {!isLoading && recentJobs.length > 0 && (
          <div className="p-4 border-t border-gray-100 text-center">
            <a href="/jobs" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              전체 채용공고 보기 →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}