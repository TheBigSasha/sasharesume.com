import { usePreview } from 'lib/sanity.preview'
import { homePageQuery } from 'lib/sanity.queries'

import { SCenter } from '../../styled/Basic'
import { BlogPage, BlogPageProps } from './BlogPage'
import { HomePagePayload } from 'types'

export default function BlogPagePreview({
  token,
  page,
  blogPosts,
  settings,
}: { token: null | string } & BlogPageProps) {
  const home: HomePagePayload = usePreview(token, homePageQuery)

  if (!home) {
    return (
      <SCenter>
        Please start editing your Blog document to see the preview!
      </SCenter>
    )
  }

  return <BlogPage page={home} settings={settings} preview={true} blogPosts={blogPosts} />
}
