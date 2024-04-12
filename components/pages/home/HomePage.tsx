import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Layout from 'components/shared/Layout'
import { PTImage } from 'components/styled/PortableText'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'
import styled from 'styled-components'

import {
  SHugeGap,
  SImage,
  SImageWrapper,
  SMidGap,
  SShowcaseProjectWrapper,
  SSpacing,
} from '../../styled/Basic'
import { HomeLinks } from './HomeLinks'
import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

const HPImage = styled(PTImage)`
  & > img {
    border-radius: var(--border-radius);
  }
`

export function HomePage({ page, settings, preview }: HomePageProps) {
  const {
    overview,
    showcaseProjects,
    title = 'Sasha Resume',
    menuItems,
    image,
  } = page ?? {}

  return (
    <>
      <HomePageHead page={page} settings={settings} />

      <Layout settings={settings} preview={preview}>
        {image && (
          <>
            <HPImage>
              <ImageBox
                image={image}
                classesWrapper="relative aspect-anamorphic resp-img contain rounded-default"
              />
            </HPImage>
            <SMidGap />
          </>
        )}
        <SSpacing>
          {/* Header */}
          {title && (
            <Header
              centered
              title={title}
              animateTitle
              description={overview}
            />
          )}
        </SSpacing>
        <SHugeGap />
      </Layout>
    </>
  )
}
