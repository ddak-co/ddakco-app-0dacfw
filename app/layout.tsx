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
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-blue-600 flex-shrink-0">매칭 판별기</h1>
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              <li><a href="/" className="text-gray-700 hover:text-blue-600 transition-colors py-2">대시보드</a></li>
              <li><a href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors py-2">채용공고</a></li>
              <li><a href="/resumes" className="text-gray-700 hover:text-blue-600 transition-colors py-2">이력서</a></li>
              <li><a href="/results" className="text-gray-700 hover:text-blue-600 transition-colors py-2">결과</a></li>
              <li><a href="/settings" className="text-gray-700 hover:text-blue-600 transition-colors py-2">설정</a></li>
            </ul>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8 min-h-[calc(100vh-88px)]">
          {children}
        </main>
      </body>
    </html>
  );
}