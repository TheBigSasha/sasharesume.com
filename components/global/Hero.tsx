import React from 'react'

import { Hero } from '../../types'
import styled from 'styled-components'
import { CustomPortableText } from '../shared/CustomPortableText'
import { SImageWrapper, SProjectLinkButton } from '../styled/Basic'
import ImageBox from '../shared/ImageBox'
import { FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'

const LRHeroWrapper = styled.div<Pick<Hero, 'layout'>>`
  width: 100%;
  height: 350px;
  flex-direction: ${(props) =>
    props.layout === 'right' ? 'row' : 'row-reverse'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  max-height: 50vh;
  max-width: 1200px;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`

const HeroImageContainer = styled(SImageWrapper)<Pick<Hero, 'layout'>>`
  width: ${(props) => (props.layout === 'center' ? '100%' : '50%')};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  @media (max-width: 500px) {
    width: 100%;
  }
  & image {
    border-radius: var(--border-radius);
  }
`

const HeroBodyContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 20px;
  overflow: hidden;
  @media (max-width: 500px) {
    width: 100%;
  }
`

const OuterSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: fit-content;
  z-index: 1;
  @media (max-width: 500px) {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`

const InnerSpan = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  padding: 0;
  margin: 0;
  z-index: 1;
  max-width: 1200px;
`

const CTALink = styled(Link)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  @media (max-width: 500px) {
    bottom: 0;
    right: 0;
  }
`
export const HeroBlock: React.FC<Hero> = ({
  headline,
  body,
  banner,
  cta,
  layout,
}) => {
  return (
    <OuterSpan>
      <InnerSpan>
        <LRHeroWrapper>
          <HeroBodyContainer>
            <h1>{headline}</h1>
            <CustomPortableText value={body} />
          </HeroBodyContainer>
          <HeroImageContainer layout={layout}>
            <ImageBox
              image={banner}
              width={1920}
              height={1440}
              alt={(banner.alt as string) || 'Hero Image'}
              classesWrapper="relative aspect-photo cover nomargin"
            />
          </HeroImageContainer>
        </LRHeroWrapper>
        {cta && cta.title && cta.href && (
          <CTALink
            target="_blank"
            className="text-md break-words md:text-lg"
            href={cta.href}
          >
            <SProjectLinkButton>
              {cta.title} <FaArrowCircleRight />
            </SProjectLinkButton>
          </CTALink>
        )}
      </InnerSpan>
    </OuterSpan>
  )
}
