import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* ロゴとタイトル */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/logo.png"
              alt="StarMusic Livers"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-bold">StarMusic Livers</h3>
          </div>
          
          {/* 説明文 */}
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
            音楽アーティストの夢を追いかけるライバーのためのコミュニティ。
            プロの環境とサポート体制で、あなたの才能を世界に届けます。
          </p>
          
          {/* SNSリンク */}
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              Instagram
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              YouTube
            </a>
          </div>
          
          {/* コピーライト */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 StarMusic Livers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}