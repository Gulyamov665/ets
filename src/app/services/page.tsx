'use client'
import { Slider } from '@/features/intro/SliderIntro'
import { ServicesList } from '@/features/servicesPage/ServicesList'
import { slides } from '@/services/slidesApi'
import React from 'react'

const page = () => {
  return (
    <main>
      <Slider slides={slides} />
      <ServicesList />
      
    </main>
  )
}

export default page
