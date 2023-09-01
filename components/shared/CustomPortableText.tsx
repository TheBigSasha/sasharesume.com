import { PortableText, PortableTextComponents } from '@portabletext/react'
import ImageBox from 'components/shared/ImageBox'
import { TimelineSection } from 'components/shared/TimelineSection'
import { Image, PortableTextBlock } from 'sanity'

import { SCenter, SLink } from '../styled/Basic'
import {
  PTblockquote,
  PTh1,
  PTh2,
  PTh3,
  PTh4,
  PTImage,
  PTImageCaption,
  PTol,
  PTParagraph,
  PTul,
} from '../styled/PortableText'
import { LinkCardRender } from '../global/LinkCard'
import { SyntaxHighlight } from '../global/Code'
import { EmbedRender } from 'components/global/Embed'

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return (
          <PTParagraph className={paragraphClasses}>{children}</PTParagraph>
        )
      },
      h1: ({ children }) => {
        return <PTh1>{children}</PTh1>
      },
      h2: ({ children }) => {
        return <PTh2>{children}</PTh2>
      },
      h3: ({ children }) => {
        return <PTh3>{children}</PTh3>
      },
      h4: ({ children }) => {
        return <PTh4>{children}</PTh4>
      },
      blockquote: ({ children }) => {
        return <PTblockquote>{children}</PTblockquote>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <SLink href={value?.href} rel="noreferrer noopener">
            {children}
          </SLink>
        )
      },
      ol: ({ children }) => {
        return <PTol>{children}</PTol>
      },
      ul: ({ children }) => {
        return <PTul>{children}</PTul>
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <PTImage>
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-anamorphic resp-img contain"
            />
            {value?.caption && <PTImageCaption>{value.caption}</PTImageCaption>}
          </PTImage>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
      LinkCard: ({ value }) => {
        return <LinkCardRender {...value} />
      },
      embed: ({ value }) => {
        return <EmbedRender {...value} />
      },
      code: ({ value }) => {
        return (
          <SCenter>
            <SyntaxHighlight
              code={value.code}
              language={value.language}
              filename={value.filename}
            />
          </SCenter>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}
