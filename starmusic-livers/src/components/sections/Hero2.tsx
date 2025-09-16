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

      <div className="container mx-auto px-10 h-full relative z-10 flex flex-col justify-between py-8 items-center">
        <div className="flex-1 flex flex-col justify-center space-y-10 items-center">

          {/* Top badge - exactly like reference */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/40 backdrop-blur-sm">
              <span className="text-lg">📝</span>
              <span className="text-white font-semibold text-sm">🎤 アーティスト大募集</span>
            </div>
          </div>

          {/* Main heading - exactly like reference positioning */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-center max-w-lg mx-auto">
              <span className="block text-blue-600 whitespace-nowrap">バイラルヒットを</span>
              <span className="block text-blue-600">生み出す</span>
              <span className="block text-white">アーティストに</span>
            </h1>
          </div>

          {/* Subtitle - exactly like reference */}
          <div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium max-w-md text-center mx-auto">
              TikTok×音楽配信で世界へ羽ばたく！
            </p>
          </div>

          {/* Description - exactly like reference */}
          <div>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-lg text-center mx-auto">
              総フォロワー5億人のTikTokクリエイターネットワークと<br />
              Apple Music・Spotifyなど主要プラットフォームへ<br />
              同時リリース。データ分析に基づく楽曲制作から<br />
              戦略的プロモーションまで一気通丝サポート。
            </p>
          </div>

          {/* Stats - moved above CTA buttons */}
          <div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                  <span className="text-lg">📊</span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white">データドリブン</h3>
                <p className="text-xs text-white/70 mt-1">ヒット数捉分析</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                  <span className="text-lg">🔥</span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white">TikTokバイラル</h3>
                <p className="text-xs text-white/70 mt-1">5億フォロワー連携</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                  <span className="text-lg">🌍</span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white">世界同時配信</h3>
                <p className="text-xs text-white/70 mt-1">40+プラットフォーム</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - CTA buttons */}
        <div>

          {/* CTA Buttons - moved to bottom */}
          <div className="flex flex-col gap-3 items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 text-base rounded-full shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 w-full max-w-sm">
🎆 バイラルデビューへ
            </Button>
            <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 px-12 py-3 text-base rounded-full transition-all duration-300 w-full max-w-sm">
📄 サポート内容を確認
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}