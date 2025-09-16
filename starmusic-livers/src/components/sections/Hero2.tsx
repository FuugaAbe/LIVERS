import { Button } from '@/components/ui/button'

interface Hero2Props {
  backgroundImage?: string;
}

export function Hero2({ backgroundImage }: Hero2Props = {}) {
  return (
    <section 
      className="h-screen relative overflow-hidden bg-black text-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-blue-600/30" />
      

      <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center pt-8 pb-4">
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center text-left w-full lg:w-1/2 relative z-20">
          
          {/* Top badge */}
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 rounded-full border border-blue-600/40 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-sm">🎤 LIVE配信者大募集</span>
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6 leading-tight max-w-lg lg:max-w-2xl">
            <span className="block text-blue-600">
              次世代の
            </span>
            <span className="block text-blue-600">
              音楽ライバー
            </span>
            <span className="block text-white mt-2">
              になろう
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-xl mb-4 lg:mb-6 text-gray-300 font-light max-w-md lg:max-w-xl">
            🎵 音楽×配信で新しい可能性を∞
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm lg:text-base mb-8 lg:mb-12 text-white max-w-md lg:max-w-xl leading-relaxed">
            🎮 プロの機材・専門スタッフ・マーケティング支援まで完全サポート！<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>🌟 初心者から経験者まで、あなたの音楽を世界に届けます。
          </p>

          </div>

          {/* Right side - Character/Visual element positioned absolutely */}
          <div className="absolute top-4 right-4 lg:top-1/2 lg:right-8 lg:transform lg:-translate-y-1/2 z-10">
            <div className="relative">
              {/* Main character placeholder */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-6xl mb-1 lg:mb-3">🎤</div>
                  <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">音楽ライバー</p>
                  <p className="text-white/80 text-xs lg:text-sm">あなたの音楽を世界に</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 lg:-top-3 lg:-right-3 w-6 h-6 lg:w-12 lg:h-12 bg-blue-600/30 rounded-full backdrop-blur-sm animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 lg:-bottom-3 lg:-left-3 w-4 h-4 lg:w-8 lg:h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
            </div>
          </div>

          {/* Bottom section - Stats and CTA */}
          <div className="mt-8 lg:mt-12 w-full">
            {/* Stats or features - Bottom placement like reference */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-6">
              <div className="text-center">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                  <span className="text-base lg:text-xl">💰</span>
                </div>
                <h3 className="text-sm lg:text-base font-semibold mb-1 text-white">高収益保証</h3>
                <p className="text-white text-xs lg:text-sm opacity-90 hidden sm:block">業界最高水準の報酬体系</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                  <span className="text-base lg:text-xl">🎵</span>
                </div>
                <h3 className="text-sm lg:text-base font-semibold mb-1 text-white">プロ機材完備</h3>
                <p className="text-white text-xs lg:text-sm opacity-90 hidden sm:block">最高品質の配信環境を提供</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                  <span className="text-base lg:text-xl">🚀</span>
                </div>
                <h3 className="text-sm lg:text-base font-semibold mb-1 text-white">全面サポート</h3>
                <p className="text-white text-xs lg:text-sm opacity-90 hidden sm:block">デビューから成長まで徹底支援</p>
              </div>
            </div>

            {/* CTA Buttons - Bottom placement */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center lg:items-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 text-base rounded-full shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105">
                ⚡ 今すぐエントリー
              </Button>
              <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 px-8 py-3 text-base rounded-full transition-all duration-300">
                📋 応募条件を確認
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}