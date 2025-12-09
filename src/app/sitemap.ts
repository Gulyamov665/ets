import { servicesListApi } from '@/services/servicesApi'
import { MetadataRoute } from 'next'

export default function Sitemap(): MetadataRoute.Sitemap {
  const services = servicesListApi.map((service) => ({
    url: `https://energotamirservice.com/services/${service.id}`,
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
