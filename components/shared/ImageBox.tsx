import { urlForImage } from 'lib/sanity.image'

import { SImageBoxGlow, SImageGlow } from 'components/styled/Glow'
import { SImage, SImageBox } from '../styled/Basic'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  glow?: boolean
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  glow: isGlow = false,
}: ImageBoxProps) {
  const imageUrl = image && urlForImage(image)?.url()

  // @ts-ignore We qurey for pallete to use this, as `"palette": asset->metadata.palette,`
  const imagePallete = image?.palette?.dominant?.background
    ? //@ts-ignore
      [image?.palette?.dominant?.background]
    : ['#000000']

  if (isGlow) {
    return (
      <SImageBoxGlow className={classesWrapper} glowColor={imagePallete[0]}>
        {imageUrl && (
          <SImageGlow
            alt={alt}
            width={width}
            height={height}
            sizes={size}
            src={imageUrl}
            glowColor={imagePallete[0]}
          />
        )}
      </SImageBoxGlow>
    )
  }

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
