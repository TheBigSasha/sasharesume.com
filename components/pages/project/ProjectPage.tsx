import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Head from 'next/head'
import Link from 'next/link'
import type { ProjectPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import ProjectPageHead from './ProjectPageHead'
import { SHeaderBorder, SProjectBox, SProjectDetailsGrid, SProjectList, STag, STagGroup, STagText, SProjectDetailsGridBox } from '../../styled/Basic'

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
  } = project || {}

  const startYear = new Date(duration?.start).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>
      <Head>
        <ProjectPageHead project={project} title={homePageTitle} />
      </Head>

      <Layout settings={settings} preview={preview}>
        <div>
          <SProjectList>
            {/* Header */}
            <Header title={title} description={overview} />

            <SProjectBox>
              {/* Image  */}
              <ImageBox
                image={coverImage}
                alt={`Cover image for ${title}`}
                classesWrapper="relative aspect-dci"
              />

              <SProjectDetailsGrid>
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
                    <div className="text-xs md:text-sm">Client</div>
                    <div className="text-md md:text-lg">{client}</div>
                  </SProjectDetailsGridBox>
                )}

                {/* Site */}
                {site && (
                  <SProjectDetailsGridBox>
                    <div className="text-xs md:text-sm">Site</div>
                    {site && (
                      <Link
                        target="_blank"
                        className="text-md break-words md:text-lg"
                        href={site}
                      >
                        {site}
                      </Link>
                    )}
                  </SProjectDetailsGridBox>
                )}

                {/* Tags */}
                <SProjectDetailsGridBox>
                  <STagText>Tags</STagText>
                  <STagGroup>
                    {tags?.map((tag, key) => (
                      <STag
                        key={key}
                      >
                        {tag}
                      </STag>
                    ))}
                  </STagGroup>
                </SProjectDetailsGridBox>
              </SProjectDetailsGrid>
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
