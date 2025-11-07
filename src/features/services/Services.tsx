import { servicesApi } from '@/services/servicesApi'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Services = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mb-10">
      {servicesApi.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center  text-center cursor-pointer"
        >
          <motion.div
            className="  flex justify-center items-center mb-4 relative shadow-2xl rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: service.id * 0.1,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black/10  z-20 rounded-2xl"></div>

            {service.image ? (
              <Image
                src={service.image[0]}
                alt={service.title}
                className="w-[442px] h-[260px] rounded-2xl object-cover"
              />
            ) : null}
          </motion.div>
          <div className="font-bold text-xl text-gray-800 ">
            {service.title}
          </div>
          <div>{service.subtitle}</div>
        </div>
      ))}
    </div>
  )
}
