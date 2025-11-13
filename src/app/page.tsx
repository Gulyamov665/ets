'use client'
import { ContactBlock } from '@/features/contact/ContactBlock'
import { Installation } from '@/features/installation/Installation'
import { Slider } from '@/features/intro/SliderIntro'
import { Partners } from '@/features/partners/Partners'
import { Projects } from '@/features/projects/Projects'
import { Services } from '@/features/services/Services'
import { slides } from '@/services/slidesApi'
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <Slider slides={slides} />
      <Installation />
      <Services />
      <Projects />
      {/* <Testimonial /> */}

      <ContactBlock />
      <Partners />
    </main>
  )
}
