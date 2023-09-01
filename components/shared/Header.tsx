import { CustomPortableText } from 'components/shared/CustomPortableText'
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { CascadeText } from 'tbsui'

import {
  SHeaderBackButton,
  SHeaderDescription,
  SHeaderTitle,
  SHeaderWrapper,
} from '../styled/Basic'
//TODO: page transition animation not to play on first opening of the page (only on route change)

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
  slug?: string
  animateTitle?: boolean
  backButtonDestination?: string
}
export function Header(props: HeaderProps) {
  const {
    title,
    description,
    centered,
    backButtonDestination = false,
    slug = 'title',
  } = props
  if (!description && !title) {
    return null
  }
  return (
    <SHeaderWrapper centered={centered}>
      {/* Title */}
      {!centered && (
        <Link href={backButtonDestination || `/#${slug}`}>
          <SHeaderBackButton>
            <FaChevronLeft /> Back to gallery
          </SHeaderBackButton>
        </Link>
      )}

      {title && (
        <SHeaderTitle
          id={'title'}
          // className={centered ? 'textTrackSweep' : ''}
        >
          {props.animateTitle ? (
            <CascadeText
              text={title}
              direction={'down'}
              staggerLetters={0.05}
              textStyles={{
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              }}
            />
          ) : (
            title
          )}
        </SHeaderTitle>
      )}
      {/* Description */}
      {description && (
        <SHeaderDescription>
          <CustomPortableText value={description} />
        </SHeaderDescription>
      )}
    </SHeaderWrapper>
  )
}
