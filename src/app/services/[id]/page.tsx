import { ServicesAbout } from '@/features/servicesPage/components/ServicesAbout'
import {
  afterWorkSteps,
  howWeWorkSteps,
  servicesListApi,
} from '@/services/servicesApi'
import { messageUrl } from '@/services/urls'
import { ThemedBtn } from '@/shared/components/ThemedBtn'
import { ThemedModal } from '@/shared/components/ThemedModal'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

type Params = { params: Promise<{ id: string }> }

const Page: React.FC<Params> = async ({ params }) => {
  const { id } = await params

  return <ServicesAbout id={String(id)} />
}

export default Page
