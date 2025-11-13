import React from 'react'
import { ServicesDesc } from './components/ServicesDesc'
import { ServicesItems } from './components/ServicesItems'

export const ServicesList = () => {
  return (
    <section className="py-14 md:py-20 rounded-t-3xl bg-[#ffffff]  relative bottom-5 z-40">
      <ServicesDesc />
      <ServicesItems />
    </section>
  )
}
