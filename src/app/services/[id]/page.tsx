import {
  afterWorkSteps,
  howWeWorkSteps,
  servicesListApi,
} from '@/services/servicesApi'
import { ThemedBtn } from '@/shared/components/ThemedBtn'
import Image from 'next/image'
import React from 'react'

type Params = { params: { id: string } }

const page: React.FC<Params> = ({ params }) => {
  const { id } = params
  const service = servicesListApi.find((serv) => serv.id === Number(id))

  if (service) {
    return (
      <main>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 h-[500px] mb-20 items-center container">
          <div>
            <h1 className="lg:text-6xl text-3xl font-extrabold mb-10 whitespace-pre-line">
              {service.title}
            </h1>
            <div className="mt-20">
              <ThemedBtn title="Оставить заявку" />
            </div>
          </div>
          <Image src={service.mainImage} alt="main" />
        </div>
        <div className="bg-brand-grey lg:pt-10 lg:pb-10 p-5 mb-20">
          <h1 className="lg:text-6xl text-3xl font-extrabold mb-10 text-center">
            {service.subTitle}
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-10 container ">
            <div className="order-2 lg:order-1">
              <p className="text-shadow-2xs text-[16px] font-light">
                {service.longDesc}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {service.image && (
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="rounded-3xl shadow-lg"
                />
              )}
            </div>
          </div>
        </div>

        <div className="container mb-20">
          <h1 className="lg:text-6xl text-3xl font-extrabold mb-10 ">
            Как мы работаем?
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 mb-10  ">
            {howWeWorkSteps.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 shadow-lg flex flex-col items-center "
              >
                <div className="w-2xs h-80 mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-[0.1fr_1fr] items-start gap-4">
                  <div className="text-7xl font-extrabold text-brand-orange">
                    <h1>{item.id}</h1>
                  </div>
                  <div>
                    <h2 className="font-extrabold text-xl mb-3">
                      {item.title}
                    </h2>
                    <p className="text-[12px] font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <h1 className="lg:text-6xl text-3xl font-extrabold mb-10 text-center">
            После завершения работ вы получите
          </h1>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 mb-10  ">
            {afterWorkSteps.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 shadow-lg flex flex-col items-center text-center "
              >
                <div className="w-2xs h-80 mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h2 className="font-extrabold text-xl mb-3">{item.title}</h2>
                  <p className="text-[16px] font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }
}

export default page
