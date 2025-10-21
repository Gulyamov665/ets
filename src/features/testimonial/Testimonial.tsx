'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import img from '@/assets/images/testimonial/000067250153.jpg'

type Avatar = { id: string; src: StaticImageData; alt?: string }

export const Testimonial = () => {
  // Использую картинки из public/images — положи свои файлы туда.
  const mainImage = {
    src: img,
    alt: 'Main person',
  }

  const avatars: Avatar[] = [
    { id: 'a1', src: img },
    { id: 'a2', src: img },
    { id: 'a3', src: img },
    { id: 'a4', src: img },
    { id: 'a5', src: img },
  ]

  const avatarPositions = [
    { left: '70%', top: '15%', color: 'green' },
    { left: '80%', top: '30%', color: 'green' },
    { left: '83%', top: '50%', color: 'green' },
    { left: '80%', top: '70%', color: 'green' },
    { left: '70%', top: '85%', color: 'green' },
  ]

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: big round image + avatars */}
          <div className="relative w-full lg:w-1/2 flex">
            <div className="relative rounded-full overflow-hidden w-[340px] h-[340px] lg:w-[440px] lg:h-[440px]">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                sizes="(min-width:1024px) 440px, 440px"
                className="object-cover"
              />
            </div>

            {/* avatars on arc */}
            <div className="absolute inset-0 pointer-events-none">
              {avatars.map((av, idx) => (
                <div
                  key={av.id}
                  style={{
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    left: avatarPositions[idx].left,
                    top: avatarPositions[idx].top,
                    pointerEvents: 'auto',
                  }}
                >
                  <div className="w-14 h-14 lg:w-18 lg:h-18 rounded-full bg-white shadow-md flex items-center justify-center ring-4 ring-white">
                    <Image
                      src={av.src}
                      alt={av.alt ?? 'avatar'}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm text-[#f97316] font-bold uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Clients Reviews
            </h2>

            <p className="text-gray-500 text-lg lg:text-xl max-w-[640px] mb-8">
              Cut down on all your work by collaborating with our Launch Pad
              team to get the framework of your online business up and running
              in no time.
            </p>

            <div className="flex items-center gap-5 mt-6">
              <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
                “”
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold">
                  Thomas Walkar
                </div>
                <div className="text-gray-400">Sustainable Energy Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
