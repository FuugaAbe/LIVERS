import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "現在会社勤めをしていますが、副業でライバー活動することはできますか？",
      answer: "はい、可能です。多くの所属ライバーが本業と両立しながら活動しています。お客様のライフスタイルに合わせた柔軟な活動スケジュールをご提案いたします。まずはお気軽にご相談ください。"
    },
    {
      question: "機材など、準備が必要なものはありますか？",
      answer: "基本的には特別な機材は不要です。スマートフォンやPCがあれば配信を始めることができます。必要に応じて、より高品質な配信のための機材サポートやアドバイスも提供いたします。"
    },
    {
      question: "参加費用はかかりますか？",
      answer: "参加費用は一切かかりません。オーディション、所属、サポートサービスはすべて無料でご利用いただけます。逆に、配信活動による収益の分配制度があり、活動を通じて収入を得ることができます。"
    }
  ]

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            よくある質問
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            応募前によくいただく質問にお答えします
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            その他のご質問がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@starmusic-livers.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              📧 メールで問い合わせ
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              💬 LINEで問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}