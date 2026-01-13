// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// interface CustomDrawerProps {
//   open: boolean
//   setOpen: (open: boolean) => void
// }

// export const CustomDrawer: React.FC<CustomDrawerProps> = ({
//   open,
//   setOpen,
// }) => {
//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen)
//   }

//   const pathname = usePathname()

//   const linkClass = (href: string) =>
//     `p-[25px] font-extrabold text-lg transition-colors ${
//       pathname == href ? 'text-[#fe5716]' : 'text-black'
//     }`

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <div className="flex flex-row justify-center mt-10 mb-10">
//         <nav>
//           <Link href={'/'} className="p-[25px]  font-extrabold text-lg">
//             <span className={`hover:text-[#fe5716] ${linkClass('/')}`}>
//               Главная
//             </span>
//           </Link>
//           <Link href={'#'} className="p-[25px] font-extrabold text-lg">
//             <span className={`hover:text-[#fe5716] ${linkClass('#')}`}>
//               Партнеры
//             </span>
//           </Link>
//           <Link href={'#'} className="p-[25px] font-extrabold text-lg">
//             <span className={`hover:text-[#fe5716] ${linkClass('#')}`}>
//               Проекты
//             </span>
//           </Link>
//           <Link href="/services" className="p-[25px] font-extrabold text-lg">
//             <span className={`hover:text-[#fe5716] ${linkClass('/services')}`}>
//               Услуги
//             </span>
//           </Link>
//           <Link href={'#'} className="p-[25px] font-extrabold text-lg">
//             <span className={`hover:text-[#fe5716] ${linkClass('#')}`}>
//               Контакты
//             </span>
//           </Link>
//         </nav>
//       </div>
//     </Box>
//   )

//   return (
//     <Drawer open={open} onClose={toggleDrawer(false)}>
//       {DrawerList}
//     </Drawer>
//   )
// }

'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import WorkIcon from '@mui/icons-material/Work'
import BuildIcon from '@mui/icons-material/Build'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface CustomDrawerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const MENU = [
  { id: 'home', title: 'Главная', href: '/', icon: <HomeIcon /> },
  // {
  //   id: 'partners',
  //   title: 'Партнёры',
  //   href: '/partners',
  //   icon: <PeopleIcon />,
  // },
  { id: 'projects', title: 'Проекты', href: '/projects', icon: <WorkIcon /> },
  { id: 'services', title: 'Услуги', href: '/services', icon: <BuildIcon /> },
  {
    id: 'contacts',
    title: 'Контакты',
    href: '/contacts',
    icon: <ContactMailIcon />,
  },
]

export const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  setOpen,
}) => {
  const pathname = usePathname() || '/'

  const close = React.useCallback(() => setOpen(false), [setOpen])

  // Закрываем по Esc
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  // Основной контент шторки
  const DrawerContent = (
    <Box
      sx={{
        width: { xs: 320, sm: 380 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
      onClick={(e) => {
        // не закрываем при клике по пустому месту внутри (обработка в Link/кнопках)
      }}
    >
      {/* header */}
      <Box
        className="flex items-center justify-between px-4"
        sx={{ minHeight: 72 }}
      >
        <Link href="/" onClick={close} className="no-underline">
          <div className="flex items-center gap-3">
            {/* Логотип — можно заменить на картинку */}
            <div className="w-12 h-10 rounded-md  flex items-center justify-center text-white font-bold">
              <Image
                src={'/images/logo-trans.png'}
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Typography component="div" variant="h6" sx={{ fontWeight: 800 }}>
                EnergoTamir
              </Typography>
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
              >
                Электротехнические услуги — Бухара
              </Typography>
            </div>
          </div>
        </Link>

        <IconButton
          aria-label="Закрыть меню"
          onClick={close}
          size="large"
          sx={{
            borderRadius: 1,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* меню */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <List>
          {MENU.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <ListItem key={item.id} disablePadding>
                {/* Link оборачивает кнопку, ссылка закрывает Drawer при клике */}
                <Link href={item.href} onClick={close} className="w-full">
                  <ListItemButton
                    sx={{
                      minHeight: 64,
                      px: 3,
                      py: 1.5,
                      borderRadius: 2,
                      mx: 2,
                      my: 1,
                      transition: 'background-color 0.12s ease',
                      backgroundColor: active
                        ? 'rgba(254,87,22,0.08)'
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: active
                          ? 'rgba(254,87,22,0.12)'
                          : 'rgba(0,0,0,0.04)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 40,
                        color: active ? '#fe5716' : 'inherit',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontWeight: 700,
                        fontSize: '1.05rem',
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          })}
        </List>
      </Box>

      <Divider />

      {/* футер */}
      <Box className="px-4 py-4">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Позвоните нам:
        </Typography>

        <div className="flex items-center gap-3">
          <a href="tel:+998973034444" onClick={close} className="no-underline">
            <button
              className="px-4 py-2 rounded-md font-semibold"
              style={{
                background: '#fe5716',
                color: 'white',
                minWidth: 140,
                textAlign: 'center',
              }}
            >
              +998973034444
            </button>
          </a>
        </div>
      </Box>
    </Box>
  )

  return (
    <Drawer
      open={open}
      onClose={close}
      anchor="left"
      PaperProps={{
        sx: {
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {DrawerContent}
    </Drawer>
  )
}
