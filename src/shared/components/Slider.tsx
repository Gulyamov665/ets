import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { Autoplay } from 'swiper/modules'

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
      breakpoints={{
        320: {
          // телефоны
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        480: {
          // маленькие экраны
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          // планшеты
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1024: {
          // ноутбуки
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1280: {
          // большие мониторы
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      loop
      effect="slide"
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={4000} // длительность анимации (в мс)
      className="h-[100px] md:h-[100px]  w-full  mb-10"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="">
            <Image
              src={slide.image}
              alt={slide.alt ?? 'slide image'}
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
