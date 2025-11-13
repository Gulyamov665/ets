import React from 'react'
import Image from 'next/image'
import img from '@/assets/images/img1.jpg'
import { ContactForm } from './ContactForm'
import { useForm } from 'react-hook-form'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import axios from 'axios'
import { messageUrl } from '@/services/urls'

export const defaultValues = { name: '', phone: '', message: '' }

export type ContactFormType = {
  register: UseFormRegister<typeof defaultValues>
  handleSubmit: UseFormHandleSubmit<typeof defaultValues>
  onSubmit: (data: typeof defaultValues) => void
  loading: boolean
}

export const ContactBlock = () => {
  const [loading, setLoading] = React.useState(false)
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  })

  const onSubmit = (data: typeof defaultValues) => {
    setLoading(true)
    axios
      .post(messageUrl, { ...data, chat_id: '-5043998632' })
      .then(() => reset())
      .catch((error) => {
        console.error('Error submitting form:', error)
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="container pb-10">
      {/* Фон: относительный контейнер, image fill + overlay */}
      <div className="relative w-full min-h-[520px] rounded-3xl overflow-hidden">
        <Image
          src={img}
          alt="background"
          fill
          className="object-cover"
          priority
        />

        {/* Оверлей: pointer-events-none чтобы не блокировал прокрутку/клики */}
        <div className="absolute inset-0 bg-[rgba(23,25,90,0.85)] pointer-events-none"></div>
      </div>

      {/* Контент — оставляем в потоке, двигаем через margin (не top) */}
      {/* Если хотите небольшой налёт на фон, используйте -mt-20 (отрицательный margin), 
          но это меняет layout корректно и прокрутка будет работать как надо */}
      <div className="lg:flex relative z-30 justify-center  lg:pl-10 lg:pr-10 -mt-[510px]">
        <div className="lg:w-1/2 p-4">
          <p className="text-brand-orange text-2xl font-bold mb-10">
            Узнать подробности
          </p>
          <p className="text-white font-bold lg:text-5xl text-3xl  mb-6">
            Закажите проект — мы дадим энергию вашему бизнесу
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <ContactForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}
