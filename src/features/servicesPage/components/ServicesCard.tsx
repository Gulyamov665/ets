import React from 'react'
import Link from 'next/link'

type ServicesCardProps = {
  title: string
  desc: string
  id: number
  url: string
}

export const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  desc,
  url,
}) => {
  return (
    <Link href={`services/${url}`}>
      <div className="bg-brand-grey rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col justify-between h-full cursor-pointer">
        <div className="p-8 flex flex-col flex-grow">
          <h2 className="font-extrabold text-2xl md:text-3xl pb-3 text-black">
            {title}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed flex-grow">
            {desc}
          </p>
        </div>
        <span className="font-extrabold text-right p-2 pr-4 hover:text-brand-orange ">
          Подробнее
        </span>

        {/* Нижняя декоративная линия */}
        <div className="h-2 w-full bg-brand-orange rounded-b-2xl" />
      </div>
    </Link>
  )
}
