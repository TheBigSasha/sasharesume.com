import Head from 'next/head'
import Layout from '../../shared/Layout'
import { SShowcaseProjectWrapper, SSpacing } from '../../styled/Basic'
import { Header } from '../../shared/Header'
import { resolveHref } from '../../../lib/sanity.links'
import Link from 'next/link'
import { ProjectListItem } from '../home/ProjectListItem'
import { SettingsPayload, ShowcaseProject, TagDetails } from '../../../types'
import PageHead from '../page/PageHead'

interface ByTagPageProps {
  projects: ShowcaseProject[]
  settings: SettingsPayload
  tag: string
  preview: boolean
  tagDetails?: TagDetails
}
export function ByTagPage({
  tag,
  settings,
  preview,
  projects,
  tagDetails,
}: ByTagPageProps) {
  const title = tagDetails?.title || tag
  return (
    <>
      <PageHead
        page={{
          title: title,
          overview: tagDetails?.overview || [],
        }}
        settings={settings}
        title={title}
      />

      <Layout settings={settings} preview={preview}>
        <SSpacing>
          {/* Header */}
          {title && (
            <Header
              title={title}
              animateTitle
              description={tagDetails?.overview || []}
              backButtonDestination={'/works'}
            />
          )}
          {/* Showcase projects */}
          {projects && projects.length > 0 && (
            <SShowcaseProjectWrapper>
              {projects.map((project, key) => {
                if (!project) {
                  return null
                }
                const href = resolveHref(project._type, project.slug)
                const backlinkName = encodeURIComponent(`Back to ${title}`)
                const backlinkSlug = encodeURIComponent(
                  `${resolveHref('tag', tag)}#${project.slug}`,
                )

                if (!href) {
                  return null
                }

                const hrefWithBacklinks = `${href}?backlink-text=${backlinkName}&backlink=${backlinkSlug}`
                return (
                  <Link
                    replace
                    key={key}
                    href={hrefWithBacklinks}
                    id={`${project.slug}`}
                    scroll={false}
                  >
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </SShowcaseProjectWrapper>
          )}
        </SSpacing>
      </Layout>
    </>
  )
}
