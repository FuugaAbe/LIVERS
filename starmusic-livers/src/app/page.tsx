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
      <Hero backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80" />
      <About />
      <Strengths />
      <Support />
      <Livers />
      <Audition />
      <FAQ />
    </div>
  )
}