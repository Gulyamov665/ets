'use client'
import { Installation } from '@/features/installation/Installation'
import { Slider } from '@/features/intro/SliderIntro'
import { Services } from '@/features/services/Services'
import { slides } from '@/services/slidesApi'
import React from 'react'

export default function HomePage() {
  return (
    <main>
      <Slider slides={slides} />
      <Installation />
      <Services />
    </main>
  )
}
