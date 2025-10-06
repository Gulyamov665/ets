import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

interface Slide {
  id: number
  image: StaticImageData
  alt: string
  text: string
  title: string
}

interface SliderIntroProps {
  slides: Slide[]
}

export const Slider: React.FC<SliderIntroProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  return (
    <Swiper
      modules={[Autoplay]} // активируем оба модуля
      spaceBetween={0}
      slidesPerView={1}
      loop
      effect="slide"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1200} // длительность анимации (в мс)
      className="h-[400px] md:h-[600px] lg:h-[750px] w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide>
          <div className="relative w-full h-full ">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            <motion.div
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
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
