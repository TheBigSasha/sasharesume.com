import { CustomPortableText } from 'components/shared/CustomPortableText'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { CascadeText } from 'tbsui'

import {
  SHeaderBackButton,
  SHeaderDescription,
  SHeaderTitle,
  SHeaderWrapper,
} from '../styled/Basic'
import { useRouter } from 'next/router'
//TODO: page transition animation not to play on first opening of the page (only on route change)

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
  slug?: string
  animateTitle?: boolean
  backButtonDestination?: string
  extra?: React.ReactNode
  backHidden?: boolean
}
export function Header(props: HeaderProps) {
  const {
    title,
    description,
    centered,
    backButtonDestination = false,
    slug = 'title',
    backHidden = false,
  } = props

  const [backlink, setBacklink] = useState(backButtonDestination)
  const [backlinkText, setBacklinkText] = useState('Back to All Work')
  const router = useRouter()

  useEffect(() => {
    // Check if the URL has the "backlink" and "backlink-text" parameters
    if (
      router.query['backlink'] &&
      (router.query['backlink'] as string).startsWith('/')
    ) {
      setBacklink(
        `${router.query['backlink'] as string}`.replace('<HASH>', '#')
      ) //TODO: issue: this arbitrary backlink is a bit of a threat, because someone could put a malicious URL here.
    }
    if (router.query['backlink-text']) {
      setBacklinkText((router.query['backlink-text'] as string) || backlinkText)
    }
    //@ts-ignore
  }, [router])

  if (!description && !title) {
    return null
  }

  return (
    <SHeaderWrapper centered={centered}>
      {/* Title */}
      {!centered && !backHidden && (
        <Link href={(backlink as string) || `/works/#${slug}`}>
          <SHeaderBackButton>
            <FaChevronLeft /> {backlinkText}
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
      {props.extra ? props.extra : null}
    </SHeaderWrapper>
  )
}
