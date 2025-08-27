export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* タイトル */}
          <h3 className="text-2xl font-bold mb-6">StarMusic Livers</h3>
          
          {/* 説明文 */}
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
            音楽アーティストの夢を追いかけるライバーのためのコミュニティ。
            プロの環境とサポート体制で、あなたの才能を世界に届けます。
          </p>
          
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