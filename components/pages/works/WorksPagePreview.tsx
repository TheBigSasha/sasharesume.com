import { usePreview } from 'lib/sanity.preview'
import { homePageQuery } from 'lib/sanity.queries'
import type { HomePagePayload } from 'types'

import { SCenter } from '../../styled/Basic'
import { WorksPage, WorksPageProps } from './WorksPage'

export default function WorksPagePreview({
  token,
  page,
  settings,
}: { token: null | string } & WorksPageProps) {
  const home: HomePagePayload = usePreview(token, homePageQuery)

  if (!home) {
    return (
      <SCenter>
        Please start editing your Home document to see the preview!
      </SCenter>
    )
  }

  return <WorksPage page={home} settings={settings} preview={true} />
}
