import { Button } from '@/components/ui/button'

export function FloatingEntryButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse"
      >
        🚀 今すぐエントリー
      </Button>
    </div>
  )
}