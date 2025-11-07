import Batery from '@/assets/icons/batery.svg'
import Solar from '@/assets/icons/solar.svg'
import Investment from '@/assets/icons/investment.svg'
import Boost from '@/assets/icons/boost.svg'
import Industrial from '@/assets/icons/industrial.svg'
import Technologies from '@/assets/icons/technologies.svg'
import Inverter from '@/assets/icons/inverter.svg'
import Station2 from '@/assets/icons/station2.svg'
import profilaction from '@/assets/images/profilaction.webp'
import ukrm from '@/assets/images/ukrm.jpeg'
import diesel from '@/assets/images/diesel.webp'
import panel from '@/assets/images/panel.jpg'
import sunpanel from '@/assets/images/sunpanel.jpeg'
import maxres from '@/assets/images/maxres.jpg'
import transformator from '@/assets/images/transformator.jpg'
import rele from '@/assets/images/diploma.webp'
import { StaticImageData } from 'next/image'

export type Services = {
  id: number
  title: string
  subtitle: string
  icon?: React.ReactNode
  image?: StaticImageData[]
}

export const servicesApi: Services[] = [
  {
    id: 1,
    title: 'Профилактические испытания в электроустановках',
    subtitle:
      'заземления, кабеля измерение сопротивления изоляции, омического сопротивления обмоток',
    icon: <Batery />,
    image: [profilaction],
  },
  {
    id: 2,
    title: 'Установка монтаж и наладка ККУ конденсаторных установок',
    subtitle:
      'Устройство компенсации реактивной мощности, обслуживание в течение 12 месяцев',
    icon: <Solar />,
    image: [ukrm],
  },
  {
    id: 3,
    title:
      'Доставка монтаж установка и наладка Дизельного генератора от 3 квт до 1000 квт с гарантии до 2 лет',
    subtitle: '',
    icon: <Investment />,
    image: [diesel],
  },
  {
    id: 4,
    title:
      'Монтаж наладка и  техническому обслуживанию фотоэлектрических панелей',
    subtitle: '',
    icon: <Boost />,
    image: [sunpanel],
  },
  {
    id: 5,
    title: 'Услуга по высоковольтным испытаниям защитных средств (СИЗ)',
    subtitle: 'диэлектрические боты перчатки инструменты и.т.д',
    icon: <Industrial />,
    image: [maxres],
  },
  {
    id: 6,
    title:
      'Обслуживание распределительного трансформаторного пункта ремонт и наладка',
    subtitle: '(ГКТП, ТП, ВРУ, КТПс, КРУН, ОРУ, И.Т.Д.) ДО 500 КВ',
    icon: <Technologies />,
    image: [transformator],
  },
  {
    id: 7,
    title: 'Установка АВР, Солнечные панели Фотоэлектрические панели',
    subtitle: '',
    icon: <Inverter />,
    image: [panel],
  },
  {
    id: 8,
    title: 'Наладка испытания РЕЛЕЙНОЙ зашиты на подстанциях до 500 кВ',
    subtitle: '',
    icon: <Station2 />,
    image: [rele],
  },
]
