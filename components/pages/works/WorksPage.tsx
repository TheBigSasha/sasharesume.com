import { HeroBlock } from 'components/global/Hero'
import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import { SMidGap, SShowcaseProjectWrapper, SSpacing } from '../../styled/Basic'
import { HomeLinks } from '../home/HomeLinks'
import HomePageHead from '../home/HomePageHead'

export interface WorksPageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

export function WorksPage({ page, settings, preview }: WorksPageProps) {
  const {
    overview,
    showcaseProjects,
    title = 'Works',
    menuItems,
    image,
  } = page ?? {}

  return (
    <>
      <Head>
        <HomePageHead page={page} settings={settings} />
      </Head>

      <Layout settings={settings} preview={preview}>
        <SSpacing>
          {/* Header */}
          {title && (
            <Header
              centered
              title={`${title}`}
              animateTitle
              description={overview}
            />
          )}
          {/* Showcase projects */}
          {showcaseProjects && showcaseProjects.length > 0 && (
            <SShowcaseProjectWrapper>
              {showcaseProjects.map((project, key) => {
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
