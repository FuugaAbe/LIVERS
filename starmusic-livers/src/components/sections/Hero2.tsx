import { Button } from '@/components/ui/button'

export function Hero2() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-blue-600/30" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-4 h-screen relative z-10">
        <div className="flex flex-col justify-center h-full text-center max-w-4xl mx-auto">
          
          {/* Top badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 rounded-full border border-blue-600/40 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-lg">🎤 LIVE配信者大募集</span>
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
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
          <p className="text-2xl md:text-3xl mb-6 text-gray-300 font-light">
            音楽×配信で新しい可能性を
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-white max-w-3xl mx-auto leading-relaxed">
            プロの機材・専門スタッフ・マーケティング支援まで完全サポート<br />
            初心者から経験者まで、あなたの音楽を世界に届けます
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 text-xl rounded-full shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105">
              ⚡ 今すぐエントリー
            </Button>
            <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 px-12 py-4 text-xl rounded-full transition-all duration-300">
              📋 応募条件を確認
            </Button>
          </div>

          {/* Stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-600/30">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">高収益保証</h3>
              <p className="text-white">業界最高水準の報酬体系</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-600/30">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">プロ機材完備</h3>
              <p className="text-white">最高品質の配信環境を提供</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-600/30">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">全面サポート</h3>
              <p className="text-white">デビューから成長まで徹底支援</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}