'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* ハンバーガーメニューボタン */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30 hover:bg-blue-600 transition-colors"
        aria-label="メニューを開く"
      >
        <div className="space-y-2">
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </div>
      </button>

      {/* サイドメニュー */}
      {isMenuOpen && (
        <>
          {/* オーバーレイ */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* メニューパネル */}
          <div className="fixed top-0 right-0 h-full w-96 bg-white z-50 shadow-2xl">
            <div className="h-full flex flex-col">
              {/* ヘッダー部分 */}
              <div className="flex items-center justify-between p-8 border-b border-gray-100">
                <div className="text-xl font-bold text-gray-900">Menu</div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                  aria-label="メニューを閉じる"
                >
                  <span className="text-2xl leading-none">×</span>
                </button>
              </div>

              {/* ナビゲーション */}
              <nav className="flex-1 px-8 py-6">
                <div className="space-y-1">
                  <a
                    href="#about"
                    className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    事業所概要
                  </a>
                  <a
                    href="#strengths"
                    className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    強み
                  </a>
                  <a
                    href="#support"
                    className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    サポート
                  </a>
                  <a
                    href="#livers"
                    className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ライバー紹介
                  </a>
                  <a
                    href="#audition"
                    className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    オーディション
                  </a>
                  <a
                    href="#faq"
                    className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 border-b border-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </a>
                </div>
              </nav>

              {/* エントリーボタン */}
              <div className="p-8 border-t border-gray-100">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg rounded-lg shadow-sm hover:shadow-md transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ⚡ エントリー
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}