import { servicesListApi } from '@/services/servicesApi'
import React from 'react'
import { ServicesCard } from './ServicesCard'

export const ServicesItems = () => {
  return (
    <main>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 container">
        {servicesListApi.map((service) => (
          <div key={service.id} className="">
            <ServicesCard
              desc={service.description}
              title={service.title}
              id={service.id}
              url={service.url}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
