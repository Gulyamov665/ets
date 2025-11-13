import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import { IoCloseSharp, IoPhonePortraitSharp } from 'react-icons/io5'

import { ContactForm } from '@/features/contact/ContactForm'
import { ContactFormType } from '@/features/contact/ContactBlock'
import Link from 'next/link'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%', // на маленьких экранах почти во всю ширину
    sm: 400, // на планшетах фиксированная ширина
    md: 450, // на ноутбуках немного шире
  },
  bgcolor: 'background.paper',
  border: '2px solid #fe5716',
  boxShadow: 24,
  borderRadius: '22px',
}

type ThemedModalProps = {
  handleClose: () => void
  open: boolean
}

export const ThemedModal: React.FC<ThemedModalProps & ContactFormType> = ({
  handleClose,
  open,
  handleSubmit,
  loading,
  onSubmit,
  register,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableScrollLock={false}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Иконка закрытия */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'grey.600',
          }}
        >
          <IoCloseSharp color="white" />
        </IconButton>

        <div className="bg-brand -mb-4 rounded-t-[20px]">
          <p className="text-white font-extrabold p-4">
            Заполните заявку, и уже сегодня получите консультацию нашего
            эксперта.
          </p>
        </div>
        {/* Форма */}
        <ContactForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
        />
        <div className="bg-brand rounded-b-[20px] -mt-[18px] pl-8">
          <Link href="tel:+998987744447">
            <div className="rounded-[64px] bg-brand p-2.5 flex mb-4">
              <IoPhonePortraitSharp className="w-16 h-16 p-3 bg-brand-orange text-white rounded-full" />
              <div className="pl-4 flex flex-col justify-center">
                <p className="text-white font-bold">Номер телефона</p>
                <p className="text-white font-extrabold text-2xl">
                  +998987744447
                </p>
              </div>
            </div>
          </Link>
          <Link href="tel:+998973034444">
            <div className="rounded-[64px] bg-brand p-2.5 flex pb-4 ">
              <IoPhonePortraitSharp className="w-16 h-16 p-3 bg-brand-orange text-white rounded-full" />
              <div className="pl-4 flex flex-col justify-center">
                <p className="text-white font-bold">Номер телефона</p>
                <p className="text-white font-extrabold text-2xl">
                  +998973034444
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Box>
    </Modal>
  )
}
