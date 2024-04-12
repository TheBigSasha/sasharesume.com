import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Head from 'next/head'
import Link from 'next/link'
import type { ProjectPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import {
  SGap,
  SHeaderBorder,
  SHLine,
  SHugeGap,
  SProjectBox,
  SProjectDetails,
  SProjectLinkButton,
  SProjectDetailsGrid,
  SProjectDetailsGridBox,
  SProjectList,
  SResponsiveGrid,
  STagGroup,
} from '../../styled/Basic'
import ProjectPageHead from './ProjectPageHead'
import { FaArrowCircleRight } from 'react-icons/fa'
import React from 'react'
import { Tag } from '../../shared/Tag'
import { LinkCardRender } from '../../global/LinkCard'
import { SProjectLinkButtonGlow } from 'components/styled/Glow'

export interface ProjectPageProps {
  project: ProjectPayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function ProjectPage({
  project,
  settings,
  homePageTitle,
  preview,
}: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    tags,
    title,
    slug,
    linkCards,
  } = project || {}

  const { glowColor, foregroundColor } = coverImage?.palette
    ? {
      // @ts-ignore
      glowColor: coverImage?.palette?.vibrant?.background,
      // @ts-ignore
      foregroundColor: coverImage?.palette?.vibrant?.foreground,
    }
    : {
      glowColor: 'var(--accent)',
      foregroundColor: '#fff',
    }

  const startYear = new Date(duration?.start).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>
      <ProjectPageHead project={project} title={homePageTitle} />

      <Layout settings={settings} preview={preview} constrainWidth>
        <div>
          <SProjectList>
            {/* Header */}
            <Header title={title} slug={slug} />
            <SProjectBox>
              <SProjectDetails>
                {/* Tags */}
                <STagGroup>
                  {tags?.map((tag, key) => (
                    <Tag key={key} tag={tag} />
                  ))}
                </STagGroup>
                {/* Site */}
                {site && (
                  <Link
                    target="_blank"
                    className="text-md break-words md:text-lg"
                    href={site}
                  >
                    <SProjectLinkButtonGlow
                      glowColor={glowColor}
                      foregroundColor={foregroundColor}
                    >
                      Visit Site <FaArrowCircleRight />
                    </SProjectLinkButtonGlow>
                  </Link>
                )}
              </SProjectDetails>
              <SGap />
              {/* Image  */}
              <ImageBox
                image={coverImage}
                glow
                alt={`Cover image for ${title}`}
                classesWrapper="relative aspect-dci contain"
              />
              {/* <SProjectDetailsGrid>
                {/* Duration */}


              {/* Client */}
              {client && (
                <SProjectDetailsGridBox>
                  <div className="text-xs md:text-sm">Client</div>
                  <div className="text-md md:text-lg">{client}</div>
                </SProjectDetailsGridBox>
              )}
            </SProjectDetailsGrid> */}
          </SProjectBox>

          <SHLine />

          {/* Description */}
          {description && (
            <CustomPortableText
              paragraphClasses="font-serif max-w-3xl text-xl text-gray-700"
              value={description}
            />
          )}
          {/* Links */}
          {linkCards && (
            <>
              <SHugeGap />
              <SResponsiveGrid>
                {linkCards.map((card) => (
                  <LinkCardRender {...card} key={card.title} />
                ))}
              </SResponsiveGrid>
            </>
          )}
          {/* Workaround: scroll to top on route change */}
          <ScrollUp />
        </SProjectList>
        <SHeaderBorder />
      </div >
    </Layout >
    </>
  )
}
