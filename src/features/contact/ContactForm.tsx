import React from 'react'

export const ContactForm = () => {
  return (
    <div className="bg-brand rounded-[20px] p-10 ">
      <div>
        <input
          type="text"
          name=""
          placeholder="Введите свое имя"
          id="name"
          className="rounded-[60px] bg-white p-7 h-[60px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent mb-4"
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Номер телефона"
          required
          name=""
          id=""
          className="rounded-[60px] bg-white p-7 h-[60px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent mb-4"
        />
      </div>
      <div>
        <textarea
          name=""
          id=""
          className="rounded-[20px] bg-white p-7 h-[115px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent mb-4"
          placeholder="Сообщение"
        ></textarea>
      </div>

      <div className="mt-10">
        <button className="hidden md:inline-flex items-center mr-2 gap-2 bg-[#fe5716] border border-[#fe5716] text-[#ffffff] p-[20px] rounded-full font-extrabold text-lg ">
          Оформить заявку
        </button>
      </div>
    </div>
  )
}
