import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Audition() {
  const flowSteps = [
    { step: "1", title: "応募", description: "応募フォームまたはLINEから応募" },
    { step: "2", title: "書類審査", description: "提出書類の審査を実施" },
    { step: "3", title: "面談", description: "オンライン面談を実施" },
    { step: "4", title: "合否連絡", description: "審査結果をご連絡" }
  ]

  const requirements = [
    "現在、特定の芸能プロダクションやライバー事務所等と専属契約をされていない方"
  ]

  const welcomeConditions = [
    "タレント活動に活かせる個性的な特技をお持ちの方",
    "夢に向かって、主体的に活動できる方",
    "ファンとのコミュニケーションを楽しめる方"
  ]

  return (
    <section id="audition" className="py-20 bg-white">
      <div className="w-full px-5 sm:px-10 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Audition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            あなたの夢を一緒に叶えませんか？
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
            今すぐ応募する
          </Button>
        </div>

        <div className="space-y-10">
          {/* 応募までの流れ */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
              応募までの流れ
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {flowSteps.map((step, index) => (
                <Card key={index} className="text-center border border-gray-200">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 応募条件 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Badge variant="destructive" className="text-sm">必須</Badge>
                  応募条件
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-sm">歓迎</Badge>
                  歓迎条件
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {welcomeConditions.map((condition, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span className="text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}