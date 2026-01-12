import React from 'react'
import img from '@/assets/images/footer.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import { ContactsRow } from '@/shared/components/ContactsRow'

export const Footer = () => {
  return (
    <footer>
      <div
        className="relative bg-cover  bg-center min-h-[580px] w-full"
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <div className="absolute inset-0 bg-[rgba(23,25,90,0.85)]"></div>
        <div className="relative z-10 text-white p-6">
          <div className="lg:grid grid-cols-3  gap-4 mt-20">
            <div className=" items-center">
              <Image
                src={'/images/logo.png'}
                alt="logo"
                width={100}
                height={100}
                className="rounded-4xl  items-center inline-block"
              />
              <div className="pl-2 font-bold inline-block">
                <h1 className="font-extrabold">
                  ENERGO<span className="text-[#fe5716]">TA&apos;MIR</span>
                </h1>
                <h4>SERVIS</h4>
              </div>
              <div className="flex  items-center justify-between pt-2 lg:mt-23 mt-5 mb-10">
                <div className="flex items-center gap-4">
                  <nav className="flex items-center gap-6 mr-6 mb-2">
                    <Link href="#">
                      <div className="text-[#ffffff] hover:text-[#fe5716] font-bold flex items-center gap-2 mb-1.5">
                        <FaFacebook className="w-3 h-3 lg:w-6 lg:h-6 hover:text-[#fe5716] transition-colors" />
                        facebook
                      </div>
                    </Link>
                    <Link
                      href="https://www.instagram.com/energotamir_servis?igsh=Z2V5MjhpNmI5N204"
                      target="_blank"
                    >
                      <div className="text-[#ffffff] hover:text-[#fe5716] font-bold flex items-center gap-2 mb-1.5">
                        <FaInstagram className="w-3 h-3 lg:w-6 lg:h-6 hover:text-[#fe5716] transition-colors" />
                        instagram
                      </div>
                    </Link>
                    <Link href="https://t.me/ENERGOTAMIRSERVIS" target="_blank">
                      <div className="text-[#ffffff] hover:text-[#fe5716] font-bold flex items-center gap-2 mb-1.5">
                        <FaTelegram className="w-3 h-3 lg:w-6 lg:h-6 hover:text-[#fe5716] transition-colors" />
                        telegram
                      </div>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            <div>
              <p className="text-2xl font-extrabold mb-5">О Нас</p>
              <p className=" mb-10">
                ООО «ENERGOTA’MIRSERVIS» — специализированная компания,
                предоставляющая услуги по лабораторным испытаниям. Наши
                специалисты имеют многолетний опыт работы в энергетической сфере
                и используют современное испытательное оборудование, что
                позволяет выявлять и предотвращать потенциальные неисправности
                на ранних этапах
              </p>
            </div>
            <div>
              <p className="text-2xl font-extrabold mb-5">
                Подпишитесь на нашу рассылку
              </p>

              <p className="mb-15">
                Подпишитесь на рассылку и получайте последние новости и
                обновления
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Введите ваш email"
                  className="border-2 border-brand-orange rounded-3xl w-full p-2 outline-none focus:border-brand-orange focus:ring-0"
                />
                <FaTelegram className="w-10 h-10 hover:text-[#fe5716]  transition-colors absolute top-0.5 right-0.5" />
              </div>
            </div>
          </div>

          <ContactsRow />
          <div className="w-full border-t border-gray-200 py-6 mt-10">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-2 text-gray-500 text-sm">
              <p className="font-medium tracking-wide">
                © 2025
                <span className="text-brand-orange font-semibold">
                  {' '}
                  ENERGOTA&apos;MIRSERVIS
                </span>
                . Все права защищены.
              </p>

              <p className="flex items-center gap-1">
                Powered by
                <span className="text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors">
                  Aurora Software LLC
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
