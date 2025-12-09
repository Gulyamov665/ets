import { servicesListApi } from '@/services/servicesApi'
import { MetadataRoute } from 'next'

export default function Sitemap(): MetadataRoute.Sitemap {
  const base = 'https://energotamirservis.uz'

  const services = servicesListApi.map((service) => ({
    url: `${base}/services/${service.url}`,
  }))
  return [
    {
      url: 'https://energotamirservice.com/',
    },
    ...services,
    {
      url: 'https://energotamirservice.com/services',
    },
    {
      url: 'https://energotamirservice.com/projects',
    },
    {
      url: 'https://energotamirservice.com/contact',
    },
  ]
}
