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
  SProjectBox, SProjectDetails,
  SProjectLinkButton,
  SProjectList,
  STag,
  STagGroup, STags,
  STagText
} from '../../styled/Basic'
import ProjectPageHead from './ProjectPageHead'
import { FaArrowCircleRight } from 'react-icons/fa'
import React from 'react'

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
  } = project || {}

  const startYear = new Date(duration?.start).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>
      <Head>
        <ProjectPageHead project={project} title={homePageTitle} />
      </Head>

      <Layout settings={settings} preview={preview} constrainWidth>
        <div>
          <SProjectList>
            {/* Header */}
            <Header title={title} description={overview} slug={slug} />

            <SProjectBox>
              <SProjectDetails>

                {/* Tags */}
                  <STagGroup>
                    {tags?.map((tag, key) => (
                      <STag key={key}>{tag}</STag>
                    ))}
                  </STagGroup>
                {/* Site */}
                {site && (
                  <Link
                    target="_blank"
                    className="text-md break-words md:text-lg"
                    href={site}
                  >

                    <SProjectLinkButton>
                      Visit Site <FaArrowCircleRight />
                    </SProjectLinkButton>
                  </Link>
                )}
              </SProjectDetails>
              <SGap />
              {/* Image  */}
              <ImageBox
                image={coverImage}
                alt={`Cover image for ${title}`}
                classesWrapper="relative aspect-dci"
              />


            </SProjectBox>

            {/* Description */}
            {description && (
              <CustomPortableText
                paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
                value={description}
              />
            )}
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </SProjectList>
          <SHeaderBorder />
        </div>
      </Layout>
    </>
  )
}
