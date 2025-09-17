import { Card, CardContent } from '@/components/ui/card'

export function Livers() {
  const livers = [
    {
      name: "Aさん",
      genre: "ポップス",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0d4e8?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Bさん",
      genre: "ロック",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Cさん",
      genre: "R&B",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ]

  return (
    <section id="livers" className="py-30 bg-gray-100">
      <div className="container mx-10 px-0">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
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