'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { slides } from '@/services/slidesApi'
import Image from 'next/image'

export const Projects = () => {
  const breakpoints = {
    1024: {
      slidesPerView: 2, // на десктопе 3 (подкорректируй под нужды)
    },
  }

  return (
    <div className="bg-brand-grey pt-20 pb-2">
      <div>
        <p className="text-center font-extrabold text-3xl mb-10 text-brand-orange">
          Наши проекты
        </p>
      </div>
      <div className="flex justify-center mb-16">
        <div className="border-b-4 border-brand-orange w-[83px]"></div>
      </div>
      <Swiper
        modules={[Pagination]} // активируем оба модуля
        slidesPerView={1}
        effect="slide"
        breakpoints={breakpoints}
        pagination={{
          clickable: true, // ← делает точки кликабельными
          dynamicBullets: true, // ← анимация при переходах (необязательно)
        }}
        className="container mb-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="p-2">
              <Image
                src={slide.image}
                alt="slide"
                className="object-cover  rounded-t-2xl rounded-b-2xl h-[400px]  lg:h-[375px] w-full"
              />
            </div>
            <div className="bg-[#ffffff] shadow-[-1px_10px_34px_1px_rgba(0,0,0,0.15)]  mb-10 relative p-10 rounded-[16px] w-[92%] ml-[15px]  mt-[-70px] lg:w-[70%] lg:ml-10 lg:mt-[-100px]">
              <p className="text-xl font-bold pb-4 ">
                Develops and Manages Sustainable Infrastructure
              </p>

              <p>
                <span className="text-brand font-extrabold">250.43</span> KWP
                SYSTEM
              </p>
            </div>
            <div className="h-[50px]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
