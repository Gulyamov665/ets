import { ContactBlock } from '@/features/contact/ContactBlock'
import { Slider } from '@/features/intro/SliderIntro'
import { slides } from '@/services/slidesApi'
import { ContactsRow } from '@/shared/components/ContactsRow'
import YandexMap from '@/shared/components/YandexMap'
import dynamic from 'next/dynamic'
import React from 'react'

// const YandexMap = dynamic(() => import('@/shared/components/YandexMap'), {
//   ssr: false,
// })

export default function page() {
  return (
    <div>
      <Slider slides={slides} />
      <div className=" px-4 sm:px-6 lg:px-8 py-12 rounded-t-3xl relative bottom-5 z-40 bg-white">
        <ContactBlock />
        <ContactsRow />
        <YandexMap />
      </div>
    </div>
  )
}
