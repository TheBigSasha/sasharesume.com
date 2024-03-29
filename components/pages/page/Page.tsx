import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import Head from 'next/head'
import type { PagePayload, SettingsPayload } from 'types'

import {
  SMidGap,
  SHeaderBorder,
  SHugeGap,
  SResponsiveGrid,
} from '../../styled/Basic'
import PageHead from './PageHead'
import { HeroBlock } from '../../global/Hero'
import { LinkCardRender } from '../../global/LinkCard'

export interface PageProps {
  page: PagePayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function Page({ page, settings, homePageTitle, preview }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, hero, linkCards } = page || {}

  return (
    <>
      <Head>
        <PageHead page={page} settings={settings} title={homePageTitle} />
      </Head>

      <Layout settings={settings} preview={preview}>
        <div>
          <div className="mb-14">
            {/* Header */}
            <Header title={title} />
            {hero && (
              <>
                {' '}
                <SMidGap />
                <HeroBlock {...hero} />
              </>
            )}
            {/* Body */}
            {body && (
              <CustomPortableText
                paragraphClasses="font-serif max-w-3xl text-gray-700 text-xl"
                value={body}
              />
            )}

            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <SHeaderBorder />
        </div>
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
      </Layout>
    </>
  )
}
