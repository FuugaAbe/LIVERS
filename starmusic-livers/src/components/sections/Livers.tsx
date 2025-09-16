import { Card, CardContent } from '@/components/ui/card'

export function Livers() {
  const livers = [
    {
      name: "準備中",
      genre: "ポップス",
      image: "https://via.placeholder.com/300x300?text=Coming+Soon"
    },
    {
      name: "準備中",
      genre: "ロック",
      image: "https://via.placeholder.com/300x300?text=Coming+Soon"
    },
    {
      name: "準備中",
      genre: "R&B",
      image: "https://via.placeholder.com/300x300?text=Coming+Soon"
    }
  ]

  return (
    <section id="livers" className="py-30 bg-gray-100">
      <div className="container mx-auto px-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">
            所属ライバー
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            StarMusic Liversで活躍するタレントたち
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {livers.map((liver, index) => (
            <Card key={index} className="overflow-hidden py-0 border border-gray-200">
              <div className="aspect-square bg-blue-600 flex items-center justify-center">
                <div className="text-6xl text-white">🎤</div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{liver.name}</h3>
                <p className="text-gray-600">{liver.genre}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}