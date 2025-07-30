import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            StarMusic Livers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            音楽アーティストの夢を追いかけるライバーのためのコミュニティ
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            ライブ配信で安定した収益を確保しながら、音楽の夢を実現するための最適な環境を提供します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold px-8 py-3 text-lg">
              オーディションに応募
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              詳しく見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}