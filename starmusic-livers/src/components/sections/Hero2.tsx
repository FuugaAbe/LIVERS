import { Button } from '@/components/ui/button'

export function Hero2() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black text-white py-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-blue-600/30" />
      

      <div className="container mx-auto px-4 min-h-screen relative z-10 flex items-center">
        <div className="flex flex-col justify-center text-center max-w-4xl mx-auto w-full">
          
          {/* Top badge */}
          <div className="mb-6 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/40 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-base">🎤 LIVE配信者大募集</span>
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-blue-600">
              次世代の
            </span>
            <span className="block text-blue-600">
              音楽ライバー
            </span>
            <span className="block text-white mt-4">
              になろう
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-6 text-gray-300 font-light">
            音楽×配信で新しい可能性を
          </p>

          {/* Description */}
          <p className="text-lg mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            プロの機材・専門スタッフ・マーケティング支援まで完全サポート<br />
            初心者から経験者まで、あなたの音楽を世界に届けます
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105">
              ⚡ 今すぐエントリー
            </Button>
            <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg rounded-full transition-all duration-300">
              📋 応募条件を確認
            </Button>
          </div>

          {/* Stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-600/30">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">高収益保証</h3>
              <p className="text-white text-base opacity-90">業界最高水準の報酬体系</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-600/30">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">プロ機材完備</h3>
              <p className="text-white text-base opacity-90">最高品質の配信環境を提供</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-600/30">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">全面サポート</h3>
              <p className="text-white text-base opacity-90">デビューから成長まで徹底支援</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}