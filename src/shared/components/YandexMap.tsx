'use client'

import { useEffect } from 'react'

type YMaps = {
  ready: (cb: () => void) => void
  Map: new (
    element: string | HTMLElement,
    options: {
      center: [number, number]
      zoom: number
    }
  ) => {
    geoObjects: {
      add: (obj: unknown) => void
    }
  }
  Placemark: new (
    coords: [number, number],
    properties?: Record<string, unknown>,
    options?: Record<string, unknown>
  ) => unknown
}

declare global {
  interface Window {
    ymaps?: YMaps
  }
}

const YandexMap = () => {
  useEffect(() => {
    const init = () => {
      if (!window.ymaps) return

      const map = new window.ymaps.Map('map', {
        center: [39.739137, 64.443302],
        zoom: 21,
      })

      const placemark = new window.ymaps.Placemark(
        [39.739137, 64.443302],
        {},
        { preset: 'islands#redIcon' }
      )

      map.geoObjects.add(placemark)
    }

    if (window.ymaps) {
      window.ymaps.ready(init)
    } else {
      const script = document.createElement('script')
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
      script.onload = () => window.ymaps?.ready(init)
      document.body.appendChild(script)
    }
  }, [])

  return <div id="map" style={{ width: '100%', height: '500px' }} />
}

export default YandexMap
