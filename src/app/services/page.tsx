import { ServicesClient } from '@/features/servicesPage/components/ServicesClient'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Наши услуги',
}

const page = () => {
  return <ServicesClient />
}

export default page
