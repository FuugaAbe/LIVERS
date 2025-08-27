export function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-8 text-center max-w-4xl mx-auto">
            <p>
              <span className="font-semibold text-blue-600">StarMusic Livers</span>は、音楽アーティストの夢を追いかけるライバーのためのコミュニティ（箱）です。
            </p>
            <p>
              私たちは、あなたがライブ配信活動で安定した収益を確保しながら、音楽の夢を実現するための最適な環境を提供します。
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}