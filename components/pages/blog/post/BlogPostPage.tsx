import { LinkCardRender } from 'components/global/LinkCard'
import ProjectPageHead from 'components/pages/project/ProjectPageHead'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import { Tag } from 'components/shared/Tag'
import {
  SGap,
  SHeaderBorder,
  SHLine,
  SHugeGap,
  SProjectBox,
  SProjectDetails,
  SProjectList,
  SResponsiveGrid,
  STagGroup,
} from 'components/styled/Basic'
import { SProjectLinkButtonGlow } from 'components/styled/Glow'
import Head from 'next/head'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'
import { BlogPostPayload, SettingsPayload } from 'types'
import { DisappearingPopupMessage } from 'tbsui-ssr'
import { UnderContstruction } from '../../../global/UnderContstruction'
export interface BlogPostPageProps {
  blogPost: BlogPostPayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function BlogPostPage({
  blogPost,
  settings,
  homePageTitle,
  preview,
}: BlogPostPageProps) {
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
  } = blogPost || {}

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

  return (
    <>
      <DisappearingPopupMessage
        label="Got ideas? Share!"
        delay={10}
        variant="INFO"
        style={{
          position: 'fixed',
          left: 'var(--space-md)',
          bottom: 'var(--space-md)',
          zIndex: 9999,
        }}
      >
        <p style={{ marginBottom: 0 }}>
          {`Hey there! Enjoying the read? Don't hesitate to post your thougts in the GitHub discussion for this project!`}
        </p>
      </DisappearingPopupMessage>
      {/* TODO: switch to custom head if needed */}
      <ProjectPageHead project={blogPost} title={title} />

      <Layout settings={settings} preview={preview} constrainWidth>
        <div>
          <SProjectList>
            {/* Header */}
            <Header
              title={title}
              slug={slug}
              backButtonDestination={`/blog#${slug}`}
              extra={<UnderContstruction />}
            />
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
                width={2160}
                height={500}
                alt={`Cover image for ${title}`}
                classesWrapper="relative aspect-anamorphic cover"
              />
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
        </div>
      </Layout>
    </>
  )
}
