import { Card, CardContent } from '@/components/ui/card'

export function Livers() {
  const livers = [
    {
      name: "Aさん",
      genre: "ポップス",
      emoji: "👩"
    },
    {
      name: "Bさん",
      genre: "ロック",
      emoji: "👩"
    },
    {
      name: "Cさん",
      genre: "R&B",
      emoji: "👨"
    }
  ]

  return (
    <section id="livers" className="py-20 bg-gray-100">
      <div className="w-full px-5 sm:px-10 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            所属ライバー
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            StarMusic Liversで活躍するタレントたち
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {livers.map((liver, index) => (
            <Card key={index} className="overflow-hidden py-0 border border-gray-200">
              <div className="aspect-square bg-blue-600 flex items-center justify-center">
                <div className="text-8xl">{liver.emoji}</div>
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