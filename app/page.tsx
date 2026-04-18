'use client';

import { BarChart3, Users, CheckCircle, AlertCircle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: '총 채용공고', value: 12, icon: BarChart3 },
    { label: '지원자', value: 156, icon: Users },
    { label: '합격', value: 89, icon: CheckCircle },
    { label: '불합격', value: 67, icon: AlertCircle },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon className="w-10 h-10 text-blue-500" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">최근 채용공고</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-3 border rounded">
              <div>
                <p className="font-medium">경력사원 - {item}</p>
                <p className="text-sm text-gray-500">개발팀</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">진행중</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
