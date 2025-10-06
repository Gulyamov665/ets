import Energy from '@/assets/icons/energy.svg'
import Station from '@/assets/icons/station.svg'

export type Card = {
  id: number
  title: string
  subtitle?: string
  color?: 'green' | 'blue' | 'teal' | 'gray'
  icon?: React.ReactNode
}

export const defaultCards: Card[] = [
  {
    id: 1,
    title: 'Электромонтажные работы',
    subtitle:
      'Надёжный монтаж электросетей и оборудования любой сложности',
    color: 'green',
    icon: <Energy />,
  },
  {
    id: 2,
    title: 'Энергоаудит',
    subtitle: 'Комплексная оценка энергоэффективности вашего объекта',
    color: 'blue',
    icon: <Station />,
  },
]
