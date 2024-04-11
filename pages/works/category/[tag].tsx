import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getProjectsByTag,
  getSettings,
  getTagPaths,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { SettingsPayload, ShowcaseProject } from 'types'
import { ByTagPage } from '../../../components/pages/bytag/ByTagPage'

interface TagPageProps {
  projects?: ShowcaseProject[]
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
  TagPageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, projects, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getProjectsByTag({ token, tag: params.tag }),
    getHomePageTitle({ token }),
  ])

  if (!projects) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      projects,
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

export default function ProjectsTagRoute(props: TagPageProps) {
  const { projects, settings, homePageTitle, preview, token, tag } = props

  if (preview) {
    return (
      <PreviewSuspense fallback={<div>Loading...</div>}>
        <PreviewWrapper>
          <ByTagPage
            projects={projects}
            settings={settings}
            tag={tag}
            preview
          />
        </PreviewWrapper>
      </PreviewSuspense>
    )
  }

  return (
    <>
      <ByTagPage
        projects={projects}
        settings={settings}
        tag={tag}
        preview={preview}
      />
    </>
  )
}
