import { Card, defaultCards } from '@/services/installationApi'
import Image from 'next/image'
import React from 'react'
import signature from '@/assets/images/chris-hemsworth.webp'
import Experience from '@/assets/icons/experience.svg'
import Success from '@/assets/icons/success.svg'
import Link from 'next/link'

function colorClasses(c?: Card['color']) {
  switch (c) {
    case 'green':
      return 'bg-[#0a9642] text-white'
    case 'blue':
      return 'bg-[#131645] text-white'
    case 'teal':
      return 'bg-teal-600 text-white'
    default:
      return 'bg-white text-gray-900'
  }
}

export const Installation: React.FC<{ cards?: Card[]; title?: string }> = ({
  cards = defaultCards,
  title = 'НАШИ УСЛУГИ',
}) => {
  return (
    <section className="py-14 md:py-20 rounded-t-3xl bg-[#ffffff]  relative bottom-5 z-40">
      <div className="container px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-orange">
            {title}
          </h2>
        </div>
        <div className="flex justify-center mb-16">
          <div className="border-b-4 border-brand-orange w-[83px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link
              className={`
                ${colorClasses(card.color)}
                rounded-2xl p-10 md:p-12
                shadow-lg
                overflow-hidden
                transform transition-transform duration-300
                hover:-translate-y-2
                flex flex-col items-center justify-center text-center
                
              `}
              role="article"
              aria-label={card.title}
              href={card.url ?? '#'}
              key={card.id}
              passHref
            >
              <div
                className="mb-6  h-40 rounded-full flex items-center justify-center"
                aria-hidden
              >
                {card.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                {card.title}
              </h3>
              {card.subtitle && (
                <p className="text-md md:text-lg opacity-90 max-w-xl font-medium  text-white">
                  {card.subtitle}
                </p>
              )}
              {/* </Link> */}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-30 sm:mt-18 lg:mt-30 ">
          <div>
            <p className="mb-4 text-orange font-extrabold text-[24px]">
              Ваш надёжный партнёр в мире энергии
            </p>
            <div className="w-[83px] border-b-4 mt-1 mb-4 border-[#fe5716]"></div>

            <div className="lg:grid grid-cols-2 gap-1 mb-6">
              <div className="flex mb-3">
                <div className="bg-brand inline-flex w-[70px] h-[70px] rounded-full items-center justify-center">
                  <Experience />
                </div>
                <div>
                  <p className="ml-4 font-extrabold lg:text-7xl sm:text-4xl xs:text-2xl text-4xl text-[#131645]">
                    21+
                  </p>
                  <p className="ml-4 text-[#666] font-extrabold">Лет опыта</p>
                </div>
              </div>
              <div className="flex mb-1.5">
                <div className="bg-brand inline-flex w-[70px] h-[70px] rounded-full items-center justify-center">
                  <Success />
                </div>
                <div>
                  <p className="ml-4 font-extrabold lg:text-7xl sm:text-4xl  text-4xl text-[#131645]">
                    120+
                  </p>
                  <p className="ml-4 text-[#666] font-extrabold">
                    Успешных проектов
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[86%] ml-[auto]">
            <p className=" font-light  text-[#131645]">
              <span className="font-extrabold"> OOO «ENERGOTA’MIRSERVIS» </span>{' '}
              предоставляет услуги Лабораторных испытаний в электроустановках до
              <span className="font-extrabold text-xl"> 500 кВ</span> имеющие
              все Лицензии и допуски к работам свыше
              <span className="font-extrabold text-xl"> 1000 В</span>
            </p>
            <Image
              className="pt-5 mb-1.5"
              src={signature}
              width={140}
              alt="installation"
            />
            <p className="pt-2.5 text-4xl font-extrabold mb-2">Мирзаев Р.И</p>
            <p>
              Директор
              <span className="font-bold"> OOO «ENERGOTA’MIRSERVIS» </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
