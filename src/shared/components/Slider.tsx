import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

export interface Slide {
  id: number
  image: StaticImageData
  alt?: string
  text?: string
  title?: string
}

interface SliderIntroProps {
  slides: Slide[]
}

export const SliderShared: React.FC<SliderIntroProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Autoplay]} // активируем оба модуля
      spaceBetween={10}
      slidesPerView={4}
      loop
      effect="slide"
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={4000} // длительность анимации (в мс)
      className="h-[100px] md:h-[100px]  w-full  mb-10"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div className="">
            <Image
              src={slide.image}
              alt={slide.alt ?? 'slide image'}
              fill
              className="object-contain"
            />

            {/* <motion.div
              key={
                activeIndex === index
                  ? `text-${index}-${Date.now()}`
                  : `text-${index}`
              }
              initial={{ y: 160 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="container absolute inset-0 flex flex-col  justify-center font-extrabold  text-white z-20"
            >
              <p className="text-7xl font-bold mb-4 ">{slide.title}</p>
              <p className="max-w-lg">{slide.text}</p>
            </motion.div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
