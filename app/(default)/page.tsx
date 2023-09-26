export const metadata = {
  title: 'Cod3 Team',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Timeline from '@/components/timeline'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Timeline />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
