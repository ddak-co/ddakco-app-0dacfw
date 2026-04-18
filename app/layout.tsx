import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '이력서 자동매칭 판별기',
  description: '이력서와 채용공고를 자동 매칭하는 지능형 판별 시스템',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">매칭 판별기</h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="/" className="hover:text-blue-600">대시보드</a></li>
              <li><a href="/jobs" className="hover:text-blue-600">채용공고</a></li>
              <li><a href="/resumes" className="hover:text-blue-600">이력서</a></li>
              <li><a href="/results" className="hover:text-blue-600">결과</a></li>
              <li><a href="/settings" className="hover:text-blue-600">설정</a></li>
            </ul>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
