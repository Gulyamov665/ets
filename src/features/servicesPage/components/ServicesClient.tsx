'use client'
import React from 'react'
import { Slider } from '@/features/intro/SliderIntro'
import { ServicesList } from '@/features/servicesPage/ServicesList'
import { slides } from '@/services/slidesApi'

export const ServicesClient = () => {
  return (
    <main>
      <Slider slides={slides} />
      <ServicesList />
    </main>
  )
}
