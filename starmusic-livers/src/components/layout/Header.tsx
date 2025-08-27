import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="StarMusic Livers"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-xl font-bold text-white">StarMusic Livers</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              事業所概要
            </a>
            <a href="#strengths" className="text-white/80 hover:text-white transition-colors">
              強み
            </a>
            <a href="#support" className="text-white/80 hover:text-white transition-colors">
              サポート
            </a>
            <a href="#livers" className="text-white/80 hover:text-white transition-colors">
              ライバー紹介
            </a>
            <a href="#audition" className="text-white/80 hover:text-white transition-colors">
              オーディション
            </a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            エントリー
          </Button>
        </div>
      </div>
    </header>
  )
}