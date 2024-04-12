
import { BlogPage } from 'components/pages/blog/BlogPage'
import BlogPagePreview from 'components/pages/blog/BlogPagePreview'
import { HomePage } from 'components/pages/home/HomePage'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getAllBlogPosts, getHomePage, getSettings } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { BlogPostPayload, HomePagePayload, SettingsPayload } from 'types'

const HomePagePreview = lazy(
  () => import('components/pages/home/HomePagePreview'),
)

interface BlogPageProps {
  page: HomePagePayload
  settings: SettingsPayload
  preview: boolean
  token: string | null
  blogPosts: BlogPostPayload[]
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function IndexPage(props: BlogPageProps) {
  const { page, settings, preview, token, blogPosts } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <BlogPage
              page={page}
              settings={settings}
              preview={preview}
              blogPosts={blogPosts}
            />
          </PreviewWrapper>
        }
      >
        <BlogPagePreview
          token={token}
          page={page}
          settings={settings}
          preview={preview}
          blogPosts={blogPosts}
        />
      </PreviewSuspense>
    )
  }

  return <BlogPage page={page} settings={settings} blogPosts={blogPosts} />
}

const fallbackPage: HomePagePayload = {
  title: '',
  overview: [],
  showcaseProjects: [],
}

export const getStaticProps: GetStaticProps<
  BlogPageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, page = fallbackPage, blogPosts] = await Promise.all([
    getSettings({ token }),
    getHomePage({ token }),
    getAllBlogPosts({ token }),
  ])

  return {
    props: {
      page,
      settings,
      preview,
      token: previewData.token ?? null,
      blogPosts,
    },
  }
}
