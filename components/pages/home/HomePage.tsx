import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import { resolveHref } from 'lib/sanity.links'
import Head from 'next/head'
import Link from 'next/link'
import type { HomePagePayload } from 'types'
import { SettingsPayload } from 'types'

import { SShowcaseProjectWrapper, SSpacing } from '../../styled/Basic'
import { HomeLinks } from './HomeLinks'
import HomePageHead from './HomePageHead'

export interface HomePageProps {
  settings?: SettingsPayload
  page?: HomePagePayload
  preview?: boolean
}

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
      <Head>
        <HomePageHead page={page} settings={settings} />
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
              extra={<HomeLinks menuItems={menuItems} />}
            />
          )}
        </SSpacing>
      </Layout>
    </>
  )
}
