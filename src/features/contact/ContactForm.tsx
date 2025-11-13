import React from 'react'
import { ContactFormType } from './ContactBlock'
import { CircularProgress } from '@mui/material'

export const ContactForm: React.FC<ContactFormType> = ({
  register,
  handleSubmit,
  onSubmit,
  loading,
}) => {
  return (
    <div className="bg-brand rounded-[20px] p-10 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Введите свое имя"
            id="name"
            className="rounded-[60px] bg-white p-7 h-[60px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent mb-4"
            required
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Номер телефона"
            required
            {...register('phone', { required: true })}
            id=""
            className="rounded-[60px] bg-white p-7 h-[60px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent mb-4"
          />
        </div>
        <div>
          <textarea
            id=""
            {...register('message')}
            className="rounded-[20px] bg-white p-7 h-[115px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent mb-4"
            placeholder="Сообщение"
          ></textarea>
        </div>

        <div className="mt-10">
          <button
            className=" md:inline-flex items-center mr-2 gap-2 bg-[#fe5716] min-w-[205px] border border-[#fe5716] text-[#ffffff] p-[20px] rounded-full font-extrabold text-lg cursor-pointer "
            disabled={loading}
          >
            {loading ? (
              <div className="mx-auto">
                <CircularProgress size={20} color="inherit" />
              </div>
            ) : (
              <p> Оформить заявку</p>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
