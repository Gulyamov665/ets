import React from 'react'
import Image from 'next/image'
import img from '@/assets/images/img1.jpg'
import { ContactForm } from './ContactForm'

export const ContactBlock = () => {
  return (
    <div className="container pb-10">
      <div className="relative w-full h-[500px]">
        {/* Картинка на заднем плане */}
        <Image
          src={img}
          alt="background"
          fill
          className="object-cover z-10 rounded-3xl"
          priority
        />

        {/* Затемнение поверх */}
        <div className="absolute inset-0 bg-[rgba(23,25,90,0.851)] z-20 rounded-3xl"></div>

        {/* <div className="flex relative z-30  justify-center items-center pl-10 pr-10">
          <div className="w-1/2 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam
            neque temporibus architecto fugiat aspernatur non magnam porro,
            corrupti et!
          </div>
          <div className="w-1/2 p-4 top-[45px] relative">
            <ContactForm />
          </div>
        </div> */}

        {/* Контент поверх всего */}
        <div className="relative z-30 flex items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">Заголовок</h1>
        </div>
      </div>
    </div>
  )
}
