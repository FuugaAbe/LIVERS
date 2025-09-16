import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Strengths() {
  const strengths = [
    {
      title: "主要なライブ配信アプリ運営企業との強固な関係性",
      description: "業界をリードする配信プラットフォームと密接に連携し、最新のトレンドとチャンスを提供します。",
      icon: "🤝"
    },
    {
      title: "メジャーシーンでの豊富な楽曲プロモーション実績",
      description: "TikTokというSNSからヒット楽曲を輩出してきた実績をもとに、Live配信で次なる目標を目指します。",
      icon: "🎵"
    },
    {
      title: "音楽活動への豊富なサポート実績",
      description: "これまで多くのアーティストの成功をサポートしてきた経験と実績があります。",
      icon: "🌟"
    }
  ]

  return (
    <section id="strengths" className="py-30 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">
            私たちの強み
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            StarMusic Liversが選ばれる理由
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{strength.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {strength.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {strength.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}