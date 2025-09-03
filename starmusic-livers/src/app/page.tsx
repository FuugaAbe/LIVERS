import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Strengths } from '@/components/sections/Strengths'
import { Support } from '@/components/sections/Support'
import { Livers } from '@/components/sections/Livers'
import { Audition } from '@/components/sections/Audition'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero backgroundImage="/path/to/your/background-image.jpg" />
      <About />
      <Strengths />
      <Support />
      <Livers />
      <Audition />
      <FAQ />
    </div>
  )
}