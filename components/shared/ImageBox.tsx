import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'

import { SImage, SImageBox, SImageTp } from '../styled/Basic'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
}: ImageBoxProps) {
  const imageUrl = image && urlForImage(image)?.url()

  return (
    <SImageBox className={classesWrapper}>
      {imageUrl && (
        <SImage
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </SImageBox>
  )
}
