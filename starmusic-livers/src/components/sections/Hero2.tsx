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
      

      <div className="container mx-auto px-4 h-full relative z-10 flex items-center pt-12 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center text-left lg:text-left order-2 lg:order-1">
          
          {/* Top badge */}
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 rounded-full border border-blue-600/40 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-sm">🎤 LIVE配信者大募集</span>
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 leading-tight">
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
          <p className="text-base sm:text-lg lg:text-xl mb-3 text-gray-300 font-light">
            音楽×配信で新しい可能性を
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base mb-4 text-white max-w-2xl lg:max-w-none leading-relaxed">
            プロの機材・専門スタッフ・マーケティング支援まで完全サポート<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>初心者から経験者まで、あなたの音楽を世界に届けます
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-start lg:justify-start items-start lg:items-center mb-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 text-base rounded-full shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105">
              ⚡ 今すぐエントリー
            </Button>
            <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 px-8 py-3 text-base rounded-full transition-all duration-300">
              📋 応募条件を確認
            </Button>
          </div>

          {/* Stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-2 border border-blue-600/30">
                <span className="text-lg">💰</span>
              </div>
              <h3 className="text-sm font-semibold mb-1 text-white">高収益保証</h3>
              <p className="text-white text-xs opacity-90">業界最高水準の報酬体系</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-2 border border-blue-600/30">
                <span className="text-lg">🎵</span>
              </div>
              <h3 className="text-sm font-semibold mb-1 text-white">プロ機材完備</h3>
              <p className="text-white text-xs opacity-90">最高品質の配信環境を提供</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-2 border border-blue-600/30">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="text-sm font-semibold mb-1 text-white">全面サポート</h3>
              <p className="text-white text-xs opacity-90">デビューから成長まで徹底支援</p>
            </div>
          </div>
          </div>

          {/* Right side - Character/Visual element */}
          <div className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Main character placeholder */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl lg:text-8xl mb-4">🎤</div>
                  <p className="text-white font-semibold text-base sm:text-lg">音楽ライバー</p>
                  <p className="text-white/80 text-xs sm:text-sm">あなたの音楽を世界に</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600/30 rounded-full backdrop-blur-sm animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}