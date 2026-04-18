import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-xl text-gray-600 mb-2">페이지를 찾을 수 없습니다</p>
          <p className="text-gray-500">존재하지 않거나 삭제된 페이지입니다.</p>
        </div>
        <a
          href="/"
          className="btn-primary inline-flex items-center gap-2 justify-center"
        >
          <Home className="w-5 h-5" />
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
}