import Link from 'next/link'
import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { IoPhonePortraitSharp } from 'react-icons/io5'

export const ContactsRow = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3  gap-4 mt-20 mb-10">
        <div className="rounded-[64px] bg-brand p-2.5 flex mb-4">
          <IoPhonePortraitSharp className="w-16 h-16 p-3 bg-brand-orange text-white rounded-full" />
          <div className="pl-4 flex flex-col justify-center">
            <p className="text-white font-bold">Номер телефона</p>
            <Link href="tel:+998772687707">
              <p className="text-white font-extrabold text-2xl">
                +998772687707
              </p>
            </Link>
          </div>
        </div>
        <div className="rounded-[64px] bg-brand p-2.5 flex mb-4">
          <IoPhonePortraitSharp className="w-16 h-16 p-3 bg-brand-orange text-white rounded-full" />
          <div className="pl-4 flex flex-col justify-center">
            <p className="text-white font-bold">Номер телефона</p>
            <Link href="tel:+998973034444">
              <p className="text-white font-extrabold text-2xl">
                +998973034444
              </p>
            </Link>
          </div>
        </div>
        <div className="rounded-[64px] bg-brand p-2.5 flex mb-4">
          <FaTelegram className="w-16 h-16 p-3 bg-brand-orange text-white rounded-full" />
          <div className="pl-4 flex flex-col justify-center">
            <p className="text-white font-bold">Локация</p>
            <Link
              href="https://yandex.uz/maps/org/169260339396?si=cegwn4v4ktdxd26306kmvf19p0"
              target="_blank"
            >
              <p className="text-white font-extrabold lg:text-2xl text-xs">
                Ул.Ислама Каримова, Бухара
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
