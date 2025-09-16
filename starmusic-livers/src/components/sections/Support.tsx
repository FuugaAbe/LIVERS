import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Support() {
  const supportItems = [
    {
      title: "あなただけのオリジナル楽曲を提供",
      description: "プロの作曲家・編曲家によるオリジナル楽曲を制作し、あなたの個性を最大限に引き出します。",
      icon: "🎼"
    },
    {
      title: "プロ仕様のレコーディングスタジオが無料",
      description: "最新機材を完備したレコーディングスタジオを無料でご利用いただけます。",
      icon: "🎙️"
    },
    {
      title: "活動に必要なサポートを包括的に提供",
      description: "マネジメント、プロモーション、技術サポートまで、音楽活動に必要なすべてをサポートします。",
      icon: "🎯"
    }
  ]

  return (
    <section id="support" className="py-30 bg-blue-50">
      <div className="container mx-auto px-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">
            サポート内容
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            あなたの音楽の夢を実現するための充実したサポート
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {supportItems.map((item, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{item.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}