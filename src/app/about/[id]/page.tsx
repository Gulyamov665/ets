import React from 'react'
import { Services, servicesApi } from '@/services/servicesApi'
import Image from 'next/image'

type Params = { params: { id: string } }

export default async function ProductPage({
  params,
}: Params): Promise<React.JSX.Element> {
  const { id } = params

  const product = servicesApi.find((prod: Services) => prod.id == Number(id))

  if (!product) {
    return (
      <main>
        <h1>Product not found</h1>
      </main>
    )
  }

  return (
    <main>
      <Image
        src={product?.image[0]}
        className="w-full h-[500px]"
        alt={product.title}
      />
      <h1>{product.title}</h1>
      <p>{product.title}</p>
    </main>
  )
}
