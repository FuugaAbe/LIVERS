import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="StarMusic Livers"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold">StarMusic Livers</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              音楽アーティストの夢を追いかけるライバーのためのコミュニティ。
              プロの環境とサポート体制で、あなたの才能を世界に届けます。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">事業所概要</a></li>
              <li><a href="#audition" className="text-gray-400 hover:text-white transition-colors">オーディション</a></li>
              <li><a href="#livers" className="text-gray-400 hover:text-white transition-colors">ライバー紹介</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">サポート</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">利用規約</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 StarMusic Livers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}