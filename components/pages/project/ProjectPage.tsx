import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
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
import Giscus from '@giscus/react'
import { NEXT_PUBLIC_GISCUS_DATA_CATEGORY, NEXT_PUBLIC_GISCUS_DATA_CATEGORY_ID, NEXT_PUBLIC_GISCUS_DATA_REPO, NEXT_PUBLIC_GISCUS_DATA_REPO_ID } from '../../../lib/env.getters'

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
    role,
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
            </SProjectBox>
            {tags && tags.includes("Job") &&
              <SProjectDetailsGrid>
                {/* Project */}
                {role && (
                  <SProjectDetailsGridBox>
                    <div className="text-xs md:text-sm">Role</div>
                    <div className="text-md md:text-lg">{role}</div>
                  </SProjectDetailsGridBox>
                )}
                {/* Duration */}
                {!!(startYear && endYear) && (
                  <SProjectDetailsGridBox>
                    <div className="text-xs md:text-sm">Duration</div>
                    <div className="text-md md:text-lg">{`${startYear} -  ${endYear}`}</div>
                  </SProjectDetailsGridBox>
                )}

                {/* Client */}
                {client && (
                  <SProjectDetailsGridBox>
                    <div className="text-xs md:text-sm">Company</div>
                    <div className="text-md md:text-lg">{client}</div>
                  </SProjectDetailsGridBox>
                )}
              </SProjectDetailsGrid>
            }

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
            <SGap/>
            <Giscus
              id="comments"
              repo={NEXT_PUBLIC_GISCUS_DATA_REPO as `${string}/${string}`}
              repoId={NEXT_PUBLIC_GISCUS_DATA_REPO_ID}
              category={NEXT_PUBLIC_GISCUS_DATA_CATEGORY}
              categoryId={NEXT_PUBLIC_GISCUS_DATA_CATEGORY_ID}
              mapping="specific"
              term={`${title} (${slug})`}
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="preferred_color_scheme"
              lang="en"
              loading="lazy"
            />
            <ScrollUp />
          </SProjectList>
          <SHeaderBorder />
        </div >
      </Layout >
    </>
  )
}
