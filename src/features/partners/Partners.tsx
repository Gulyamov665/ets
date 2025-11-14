import { partnersApi } from '@/services/partners'
import { SliderShared } from '@/shared/components/Slider'
import React from 'react'

export const Partners = () => {
  return (
    <div className="">
      <div className="mb-5">
        <p className="text-brand-orange font-extrabold text-center text-3xl">
          Наши Партнеры
        </p>
      </div>
      <div className="flex justify-center lg:mb-20  mb-5">
        <div className="border-b-4 border-brand-orange w-[83px]" />
      </div>
      <div className="mt-5  lg:h-58 h-32">
        <SliderShared slides={partnersApi} />
      </div>
    </div>
  )
}
