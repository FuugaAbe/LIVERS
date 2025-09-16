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

      <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-between py-8">
        <div className="flex-1 flex flex-col justify-center space-y-8">

          {/* Top badge - exactly like reference */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/40 backdrop-blur-sm">
              <span className="text-lg">📝</span>
              <span className="text-white font-semibold text-sm">LIVE配信者大募集</span>
            </div>
          </div>

          {/* Main heading - exactly like reference positioning */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-left max-w-lg">
              <span className="block text-blue-600">次世代の</span>
              <span className="block text-blue-600">音楽ライバー</span>
              <span className="block text-white">になろう</span>
            </h1>
          </div>

          {/* Subtitle - exactly like reference */}
          <div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium max-w-md">
              音楽×配信で新しい可能性を！
            </p>
          </div>

          {/* Description - exactly like reference */}
          <div>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-lg">
              プロの機材・専門スタッフ・マーケティング支援まで<br />
              完全サポート。<br />
              初心者から経験者まで、あなたの音楽を世界に届けま<br />
              す。
            </p>
          </div>
        </div>

        {/* Bottom section - exactly like reference */}
        <div className="space-y-6">
          {/* Stats - exactly like reference */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            <div className="text-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                <span className="text-lg">🔒</span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">高収益保証</h3>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                <span className="text-lg">🎵</span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">プロ機材完備</h3>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-blue-600/30">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">全面サポート</h3>
            </div>
          </div>

          {/* CTA Buttons - exactly like reference */}
          <div className="flex flex-col gap-3 items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 text-base rounded-full shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 w-full max-w-sm">
              ⚡ 今すぐエントリー
            </Button>
            <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 px-12 py-3 text-base rounded-full transition-all duration-300 w-full max-w-sm">
              📋 応募条件を確認
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}