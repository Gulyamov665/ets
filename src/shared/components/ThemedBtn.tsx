import { CircularProgress } from '@mui/material'
import React from 'react'

type ThemedBtnProps = {
  loading?: boolean
  onclick?: () => void
  title?: string
}

export const ThemedBtn: React.FC<ThemedBtnProps> = ({
  loading,
  onclick,
  title = 'Оформить заявку',
}) => {
  return (
    <button
      className=" md:inline-flex items-center mr-2 gap-2 bg-[#fe5716] min-w-[205px] border border-[#fe5716] text-[#ffffff] p-[20px] rounded-full font-extrabold text-lg cursor-pointer "
      disabled={loading}
      onClick={onclick}
    >
      {loading ? (
        <div className="mx-auto">
          <CircularProgress size={20} color="inherit" />
        </div>
      ) : (
        <p> {title}</p>
      )}
    </button>
  )
}
