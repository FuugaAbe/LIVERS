'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
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
          <div className="fixed top-0 right-0 h-full w-80 bg-blue-900/95 backdrop-blur-md z-50 border-l border-blue-400/20">
            <div className="p-6">
              {/* ヘッダー部分 */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="StarMusic Livers"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <h1 className="text-lg font-bold text-white">StarMusic Livers</h1>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  aria-label="メニューを閉じる"
                >
                  ✕
                </button>
              </div>

              {/* ナビゲーション */}
              <nav className="space-y-4 mb-8">
                <a 
                  href="#about" 
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  事業所概要
                </a>
                <a 
                  href="#strengths" 
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  強み
                </a>
                <a 
                  href="#support" 
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  サポート
                </a>
                <a 
                  href="#livers" 
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ライバー紹介
                </a>
                <a 
                  href="#audition" 
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  オーディション
                </a>
                <a 
                  href="#faq" 
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </nav>

              {/* エントリーボタン */}
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                ⚡ エントリー
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  )
}