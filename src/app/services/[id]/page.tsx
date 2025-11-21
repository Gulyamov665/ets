'use client'
import {
  afterWorkSteps,
  howWeWorkSteps,
  servicesListApi,
} from '@/services/servicesApi'
import { messageUrl } from '@/services/urls'
import { ThemedBtn } from '@/shared/components/ThemedBtn'
import { ThemedModal } from '@/shared/components/ThemedModal'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

type Params = { params: { id: string } }

const Page: React.FC<Params> = ({ params }) => {
  const { id } = params
  const service = servicesListApi.find((serv) => serv.id === Number(id))
  const defaultValues = { name: '', phone: '', message: service?.title || '' }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [loading, setLoading] = React.useState(false)
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  })

  const onSubmit = (data: typeof defaultValues) => {
    setLoading(true)
    axios
      .post(messageUrl, { ...data, chat_id: '-5043998632' })
      .then(() => reset())
      .then(() => handleClose())
      .catch((error) => {
        console.error('Error submitting form:', error)
      })
      .finally(() => setLoading(false))
  }

  if (service) {
    return (
      <main>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 h-[600px] mb-20 items-center container mt-20">
          <div>
            <h1 className="lg:text-6xl text-3xl font-extrabold mb-10 whitespace-pre-line">
              {service.title}
            </h1>
            <div className="mt-20" onClick={handleOpen}>
              <ThemedBtn title="Оставить заявку" />
            </div>
          </div>
          <div>
            <Image
              src={service.mainImage}
              alt="main"
              className="lg:h-[600px] h-[400px]"
            />
          </div>
        </div>
        {service.intro && (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container mb-20">
            <p
              className="text-[16px] font-light whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: service.intro ?? '' }}
            />
            <p
              className="text-[16px] font-light whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: service.introPart ?? '' }}
            />
          </div>
        )}

        <div className="bg-brand-grey lg:pt-10 lg:pb-10 p-5 mb-20">
          <h1 className="lg:text-5xl text-3xl font-medium mb-10 text-center">
            {service.subTitle}
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-10 container ">
            <div className="order-2 lg:order-1">
              <p
                className="text-[16px] font-light whitespace-pre-line leading-6"
                dangerouslySetInnerHTML={{ __html: service.longDesc ?? '' }}
              ></p>
            </div>
            <div className="order-1 lg:order-2">
              {service.image && (
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="rounded-3xl shadow-lg mb-10"
                />
              )}
              <p
                className="text-[16px] font-light whitespace-pre-line leading-6"
                dangerouslySetInnerHTML={{ __html: service.part ?? '' }}
              ></p>
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
                <div>
                  <div className="w-2xs h-80 mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
                <div>
                  <div className="w-2xs h-80 mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="font-extrabold text-xl mb-3">{item.title}</h2>
                  <p className="text-[16px] font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ThemedModal
          handleClose={handleClose}
          open={open}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
        />
      </main>
    )
  }
}

export default Page
