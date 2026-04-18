export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">페이지를 찾을 수 없습니다.</p>
      <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        홈으로 돌아가기
      </a>
    </div>
  );
}
