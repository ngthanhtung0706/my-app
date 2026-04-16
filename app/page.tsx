"use client";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        {/* Phần tiêu đề */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center border-4 border-yellow-400">
          <h1 className="text-4xl font-bold text-black mb-4">
            🚀 DỰ ÁN WEB 2 TIẾNG CỦA TÔI
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Tôi vừa tự tay dựng xong bộ khung này bằng Next.js và Tailwind CSS!
          </p>

          {/* Một cái nút bấm có hiệu ứng */}
          <button 
            onClick={() => alert('Chúc mừng! Bạn đã biết tương tác với code rồi đấy!')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-110"
          >
            Bấm vào đây để nhận thưởng
          </button>
        </div>

      </div>
    </main>
  );
}