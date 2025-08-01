import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero1() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 h-screen">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full border border-pink-400/30">
              <span className="text-pink-300 font-semibold">🎤 ライバー募集中</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              あなたの才能を
              <br />
              世界に届けよう
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              StarMusic Livers で音楽配信デビュー
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl lg:max-w-none">
              未経験でもOK！充実したサポート体制で、あなたの音楽の才能を最大限に活かせる環境を提供します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold px-8 py-3 text-lg">
                🚀 今すぐ応募する
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                募集要項を見る
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-400/20 to-violet-400/20 flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-500/30 to-violet-500/30 rounded-full flex items-center justify-center text-6xl">
                  🎵
                </div>
                <p className="text-xl font-semibold mb-2">ライバー募集画像</p>
                <p className="text-sm">配信者のイメージ画像をここに配置</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-70" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-500 rounded-full blur-xl opacity-70" />
            
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-sm font-semibold text-white">✨ 新人歓迎</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}