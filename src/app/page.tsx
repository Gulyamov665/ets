'use client'
import { ContactBlock } from '@/features/contact/ContactBlock'
import { Installation } from '@/features/installation/Installation'
import { Slider } from '@/features/intro/SliderIntro'
import { Partners } from '@/features/partners/Partners'
import { Projects } from '@/features/projects/Projects'
import { Services } from '@/features/services/Services'
import { slides } from '@/services/slidesApi'
import Head from 'next/head'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          EnergoTamirService – Электромонтаж и проверка электрооборудования
        </title>
        <meta
          name="description"
          content="Технический отчет электролаборатории для квартир, офисов и промышленных объектов. Гарантия безопасности вашего объекта."
        />
        <meta
          name="keywords"
          content="электролаборатория, электромонтаж, проверка электрооборудования, техотчет"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>

      <main>
        <Slider slides={slides} />
        <Installation />
        <Services />
        <Projects />
        {/* <Testimonial /> */}

        <ContactBlock />
        <Partners />
      </main>
    </>
  )
}
