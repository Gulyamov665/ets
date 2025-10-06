import Batery from '@/assets/icons/batery.svg'
import Solar from '@/assets/icons/solar.svg'
import Investment from '@/assets/icons/investment.svg'
import Boost from '@/assets/icons/boost.svg'

export type Services = {
  id: number
  title: string
  subtitle: string
  icon?: React.ReactNode
}

export const servicesApi: Services[] = [
  {
    id: 1,
    title: 'Профилактические испытания в электроустановках',
    subtitle:
      'заземления, кабеля измерение сопротивления изоляции, омического сопротивления обмоток',
    icon: <Batery />,
  },
  {
    id: 2,
    title: 'Установка монтаж и наладка ККУ конденсаторных установок',
    subtitle:
      'Устройство компенсации реактивной мощности, обслуживание в течение 12 месяцев',
    icon: <Solar />,
  },
  {
    id: 3,
    title:
      'Доставка монтаж установка и наладка Дизельного генератора от 3 квт до 1000 квт с гарантии до 2 лет.',
    subtitle: '',
    icon: <Investment />,
  },
  {
    id: 4,
    title:
      'Монтаж наладка и  техническому обслуживанию фотоэлектрических панелей.',
    subtitle: '',
    icon: <Boost />,
  },
]
