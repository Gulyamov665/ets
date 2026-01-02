import { ServicesAbout } from '@/features/servicesPage/components/ServicesAbout'
import React from 'react'

type Params = { params: Promise<{ id: string }> }

const Page: React.FC<Params> = async ({ params }) => {
  const { id } = await params

  return <ServicesAbout id={String(id)} />
}

export default Page
