import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import type { PagePayload, SettingsPayload } from 'types'

import { HeroBlock } from '../../global/Hero'
import { LinkCardRender } from '../../global/LinkCard'
import {
  SHeaderBorder,
  SHugeGap,
  SMidGap,
  SResponsiveGrid,
} from '../../styled/Basic'
import PageHead from './PageHead'

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
    <PageHead page={page} settings={settings} title={homePageTitle} />

    <Layout settings={settings} preview={preview}>
      <div>
        <div className="mb-14">
          {/* Header */}
          <Header title={title} backHidden/>
          {(hero && hero.banner) && (
              <>
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
