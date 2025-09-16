'use client'

import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* ハンバーガーメニューボタン */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30 hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <div className="relative w-5 h-5">
          <div className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></div>
          <div className={`absolute w-5 h-0.5 bg-white transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></div>
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
          <div className="fixed top-4 right-4 w-64 bg-white z-50 shadow-xl rounded-lg">
            <div className="p-4">
              {/* ヘッダー部分 */}
              <div className="flex items-center justify-end mb-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all text-2xl"
                  aria-label="メニューを閉じる"
                >
                  ×
                </button>
              </div>

              {/* ナビゲーション */}
              <nav className="mb-6">
                <div className="space-y-2">
                  <a
                    href="#home"
                    className="block py-2 text-gray-800 font-bold hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="block py-2 text-gray-800 font-bold hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    事業所概要
                  </a>
                  <a
                    href="#strengths"
                    className="block py-2 text-gray-800 font-bold hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    強み
                  </a>
                  <a
                    href="#support"
                    className="block py-2 text-gray-800 font-bold hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    サポート
                  </a>
                  <a
                    href="#livers"
                    className="block py-2 text-gray-800 font-bold hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ライバー紹介
                  </a>
                  <a
                    href="#audition"
                    className="block py-2 text-gray-800 font-bold hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    オーディション
                  </a>
                  <a
                    href="#faq"
                    className="block py-2 text-gray-800 font-bold hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </a>
                </div>
              </nav>

            </div>
          </div>
        </>
      )}
    </>
  )
}