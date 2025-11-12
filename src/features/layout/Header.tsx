import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import { RiMailSendFill } from 'react-icons/ri'
import { GrLocation } from 'react-icons/gr'
import { HeaderSmall } from './components/HeaderSmall'

export const Header = () => {
  return (
    <>
      <header className="lg:bg-brand shadow-sm h-[103px] ">
        <div className="flex container items-center justify-between pt-2 ">
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-6 mr-6">
              <Link href="#">
                <div className="text-[#ffffff] hover:text-[#fe5716] font-bold flex items-center gap-2">
                  <FaFacebook className="w-6 h-6 hover:text-[#fe5716] transition-colors" />
                  facebook
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/energotamir_servis?igsh=Z2V5MjhpNmI5N204"
                target="_blank"
              >
                <div className="text-[#ffffff] hover:text-[#fe5716] font-bold flex items-center gap-2">
                  <FaInstagram className="w-6 h-6 hover:text-[#fe5716] transition-colors" />
                  instagram
                </div>
              </Link>
              <Link href="https://t.me/ENERGOTAMIRSERVIS" target="_blank">
                <div className="text-[#ffffff] hover:text-[#fe5716] font-bold flex items-center gap-2">
                  <FaTelegram className="w-6 h-6 hover:text-[#fe5716] transition-colors" />
                  telegram
                </div>
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="mailto:energotamir.servis@mail.ru?subject=Запрос%20на%20ремонт"
              className="hidden lg:block"
            >
              <div className="text-[#ffffff]  font-bold flex items-center gap-2">
                <div className="bg-[#fe5716] rounded-full p-2">
                  <RiMailSendFill className="w-6 h-6" />
                </div>
                <div className="hover:text-[#fe5716]">
                  energotamir.servis@mail.ru
                </div>
              </div>
            </Link>
            <Link
              href="https://yandex.uz/maps/org/169260339396?si=cegwn4v4ktdxd26306kmvf19p0"
              target="_blank"
              className="hidden lg:block"
            >
              <div className="text-[#ffffff]  font-bold flex items-center gap-2">
                <div className="bg-[#fe5716] rounded-full p-2">
                  <GrLocation className="w-6 h-6 " />
                </div>
                <div className="hover:text-[#fe5716]">
                  Улица Ислама Каримова, Бухара
                </div>
              </div>
            </Link>
          </div>
        </div>
        <HeaderSmall />
      </header>
      <div className="hidden container bg-[#ffffffff] mt-[-52px]  rounded-[54px] lg:flex justify-between items-center z-10 absolute left-0 right-0 overflow-auto text-sm font-medium text-[#171717] shadow-sm p-2">
        <div className="flex items-center">
          <Image src={'/images/logo.png'} width={80} height={80} alt="logo" />
          <div className="pl-2 font-bold">
            <h1 className="font-extrabold">
              ENERGO<span className="text-[#fe5716]">TA&apos;MIR</span>
            </h1>
            <h4>SERVIS</h4>
          </div>
        </div>

        <div className="flex items-center">
          <nav>
            <Link href={'#'} className="p-[25px]  font-extrabold text-lg">
              <span className="hover:text-[#fe5716]">Главная</span>
            </Link>
            <Link href={'#'} className="p-[25px] font-extrabold text-lg">
              <span className="hover:text-[#fe5716] transition-colors">
                Партнеры
              </span>
            </Link>
            <Link href={'#'} className="p-[25px] font-extrabold text-lg">
              <span className="hover:text-[#fe5716]">Проекты</span>
            </Link>
            <Link href={'#'} className="p-[25px] font-extrabold text-lg">
              <span className="hover:text-[#fe5716]">Услуги</span>
            </Link>
            <Link href={'#'} className="p-[25px] font-extrabold text-lg">
              <span className="hover:text-[#fe5716]">Контакты</span>
            </Link>
          </nav>
        </div>

        <button className="hidden md:inline-flex items-center mr-2 gap-2 bg-[#fe5716] border border-[#fe5716] text-[#ffffff] p-[20px] rounded-full font-extrabold text-lg">
          Связаться с нами
        </button>
      </div>
    </>
  )
}
