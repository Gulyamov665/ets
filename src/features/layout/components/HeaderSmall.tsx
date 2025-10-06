import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export const HeaderSmall = () => {
  return (
    <div className="container flex items-center justify-between lg:hidden">
      <div className="flex items-center ">
        <Image
          src={'/images/logo-trans.png'}
          width={80}
          height={80}
          alt="logo"
        />
        <div className="pl-2 font-bold">
          <h1 className="font-extrabold ">
            ENERGO<span className="text-[#fe5716]">TA'MIR</span>
          </h1>
          <h4>SERVIS</h4>
        </div>
      </div>

      <GiHamburgerMenu className="text-black text-4xl" />
    </div>
  )
}
