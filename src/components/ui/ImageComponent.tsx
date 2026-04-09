'use client'

import imageLoader from '@/lib/imageLoader'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

const ImageComponent = ({
  alt = 'image',
  src,
  ...props
}: ImageProps) => {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src || src === '') {
    return null
  }

  return (
    <Image
      alt={alt}
      src={src}
      onError={() => setHasError(true)}
      loader={imageLoader}
      {...props}
    />
  )
}

export default ImageComponent
