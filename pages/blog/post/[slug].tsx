import { PreviewSuspense } from '@sanity/preview-kit'
import { BlogPostPage } from 'components/pages/blog/post/BlogPostPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getBlogPostBySlug,
  getBlogPostPaths,
  getHomePageTitle,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { BlogPostPayload, SettingsPayload } from 'types'

const BlogPostPreview = lazy(
  () => import('components/pages/blog/post/BlogPostPreview'),
)

interface PageProps {
  blogPost?: BlogPostPayload
  settings?: SettingsPayload
  homePageTitle?: string
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { homePageTitle, settings, blogPost, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <BlogPostPage
              homePageTitle={homePageTitle}
              blogPost={blogPost}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <BlogPostPreview
          token={token}
          blogPost={blogPost}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <BlogPostPage
      homePageTitle={homePageTitle}
      blogPost={blogPost}
      settings={settings}
      preview={preview}
    />
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, blogPost, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getBlogPostBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!blogPost) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blogPost,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getBlogPostPaths()

  return {
    paths: paths?.map((slug) => resolveHref('blogPost', slug)) || [],
    fallback: false,
  }
}
