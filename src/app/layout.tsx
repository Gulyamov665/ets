import type { Metadata } from 'next'
import { Geist, Geist_Mono, Sora, Manrope } from 'next/font/google'
import { Header } from '@/features/layout/Header'
import './globals.css'
import 'swiper/css'
import 'swiper/css/effect-fade'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EnergoTamirService',
  description: 'Powered by Aurora-Software',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${manrope.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
