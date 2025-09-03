import { Hero2 } from './Hero2'

interface HeroProps {
  backgroundImage?: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  return <Hero2 backgroundImage={backgroundImage} />
}