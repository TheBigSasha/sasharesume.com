
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getBlogPostsByTag,
  getHomePageTitle,
  getSettings, getTagPaths
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { BlogPostPayload, SettingsPayload } from 'types'

import { ByTagPage } from '../../../components/pages/bytag/ByTagPage'


interface BlogTagPageProps {
  blogPosts?: BlogPostPayload[]
  settings?: SettingsPayload
  homePageTitle?: string
  preview: boolean
  token: string | null
  tag: string
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export const getStaticProps: GetStaticProps<
  BlogTagPageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, blogPosts, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getBlogPostsByTag({ token, tag: params.tag }),
    getHomePageTitle({ token }),
  ])

  if (!blogPosts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blogPosts,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
      tag: params.tag,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getTagPaths()

  return {
    paths: paths.map((tag) => resolveHref('tag', tag)),
    fallback: true,
  }
}

export default function ProjectsTagRoute(props: BlogTagPageProps) {
  const { blogPosts, settings, preview, tag } = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<div>Loading...</div>}>
        <PreviewWrapper>
          <ByTagPage
            projects={blogPosts}
            settings={settings}
            tag={tag}
            preview/>
        </PreviewWrapper>
      </PreviewSuspense>
    )
  }

  return (
    <>
    <ByTagPage
      projects={blogPosts}
      settings={settings}
      tag={tag}
      preview={preview}
    />
    </>
  )
}
