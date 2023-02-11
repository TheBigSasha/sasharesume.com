import { usePreview } from 'lib/sanity.preview'
import { homePageQuery } from 'lib/sanity.queries'
import type { HomePagePayload } from 'types'

import { SCenter } from '../../styled/Basic'
import { HomePage, HomePageProps } from './HomePage'

export default function HomePagePreview({
  token,
  page,
  settings,
}: { token: null | string } & HomePageProps) {
  const home: HomePagePayload = usePreview(token, homePageQuery)

  if (!home) {
    return (
      <SCenter>
        Please start editing your Home document to see the preview!
      </SCenter>
    )
  }

  return <HomePage page={home} settings={settings} preview={true} />
}
