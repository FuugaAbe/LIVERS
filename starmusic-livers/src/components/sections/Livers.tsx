import { Card, CardContent } from '@/components/ui/card'

export function Livers() {
  const livers = [
    {
      name: "Aさん",
      genre: "ポップス",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Bさん",
      genre: "ロック",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Cさん",
      genre: "R&B",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ]

  return (
    <section id="livers" className="py-20 bg-gray-100">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            所属ライバー
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            StarMusic Liversで活躍するタレントたち
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {livers.map((liver, index) => (
            <Card key={index} className="overflow-hidden py-0 border border-gray-200">
              <div className="aspect-square bg-blue-600 flex items-center justify-center">
                <img
                  src={liver.image}
                  alt={liver.name}
                  className="w-full h-full object-cover"
                />
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