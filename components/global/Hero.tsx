import React from 'react'

import { Hero } from '../../types'
import styled from 'styled-components'
import { CustomPortableText } from '../shared/CustomPortableText'
import { SImageWrapper } from '../styled/Basic'
import ImageBox from '../shared/ImageBox'

const LRHeroWrapper = styled.div<Pick<Hero, 'layout'>>`
  width: 100%;
  height: 350px;
  flex-direction: ${(props) => props.layout === 'right' ? 'row' : 'row-reverse' };
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  max-height: 50vh;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const HeroImageContainer = styled(SImageWrapper)<Pick<Hero, 'layout'>>`
  width: ${(props) => props.layout === 'center' ? '100%' : '50%'};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`


const HeroBodyContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 20px;
  overflow: hidden;
`


export const HeroBlock: React.FC<Hero> = ({headline,body, banner,layout}) => {
  return (
    <>
      <LRHeroWrapper>
        <HeroBodyContainer>
          <h1>{headline}</h1>
          <CustomPortableText value={body} />
        </HeroBodyContainer>
        <HeroImageContainer layout={layout}>
          <ImageBox
            image={banner}
            alt={banner.alt as string || "Hero Image"}
            classesWrapper="relative aspect-hd cover nomargin"
          />
        </HeroImageContainer>

      </LRHeroWrapper>
    </>
  )

}
