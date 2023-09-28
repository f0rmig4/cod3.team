export const metadata = {
  title: 'Cod3 Team',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Timeline from '@/components/timeline'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Companies from '@/components/companies'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Companies />
      <Zigzag />
      <Timeline />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
