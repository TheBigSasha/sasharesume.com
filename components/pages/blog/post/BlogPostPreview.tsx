import { usePreview } from 'lib/sanity.preview'
import { blogPostsBySlugQuery } from 'lib/sanity.queries'
import { BlogPostPayload } from 'types'

import { BlogPostPage, BlogPostPageProps } from './BlogPostPage'

export default function BlogPostPreview({
  token,
  settings,
  homePageTitle,
  blogPost,
}: {
  token: null | string
} & BlogPostPageProps) {
  const projectPreview: BlogPostPayload = usePreview(token, blogPostsBySlugQuery, {
    slug: blogPost?.slug,
  })

  return (
    <BlogPostPage
    blogPost={projectPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
