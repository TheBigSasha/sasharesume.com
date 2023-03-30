import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import { SShowcaseProjectWrapper, SSpacing } from '../../styled/Basic'
import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

export function HomePage({ page, settings, preview }: HomePageProps) {
  const { overview, showcaseProjects, title = 'Sasha Resume' } = page ?? {}

  return (
    <>
      <Head>
        <HomePageHead page={page} settings={settings} />
      </Head>

      <Layout settings={settings} preview={preview}>
        <SSpacing>
          {/* Header */}
          {title && <Header centered title={title} description={overview} />}
          {/* Showcase projects */}
          {showcaseProjects && showcaseProjects.length > 0 && (
            <SShowcaseProjectWrapper>
              {showcaseProjects.map((project, key) => {
                const href = resolveHref(project._type, project.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link
                    replace
                    key={key}
                    href={`${href}#title`}
                    id={`${project.slug}`}
                  >
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </SShowcaseProjectWrapper>
          )}

          {/* Workaround: scroll to top on route change */}
          <ScrollUp />
        </SSpacing>
      </Layout>
    </>
  )
}
