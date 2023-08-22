import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Link from 'next/link'
import { BlogPostPayload, HomePagePayload, SettingsPayload } from 'types'

import { SShowcaseProjectWrapper, SSpacing } from '../../styled/Basic'
import { BlogListItem } from './BlogListItem'
import BlogPageHead from './BlogPageHead'

export interface BlogPageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
  blogPosts: BlogPostPayload[]
}

export function BlogPage({ page, settings, preview, blogPosts}: BlogPageProps) {
  const { overview, showcaseProjects, title = 'Sasha Resume' } = page ?? {}

  return (
    <>
      <Head>
        <BlogPageHead page={page} settings={settings} />
      </Head>

      <Layout settings={settings} preview={preview}>
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
          {/* Showcase projects */}
          {blogPosts && blogPosts.length > 0 && (
            <SShowcaseProjectWrapper>
              {blogPosts.map((project, key) => {
                if (!project) {
                  return null
                }
                const href = resolveHref(project._type, project.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link
                    replace
                    key={key}
                    href={`${href}`}
                    id={`${project.slug}`}
                    scroll={false}
                  >
                    <BlogListItem project={project} odd={key % 2} />
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
