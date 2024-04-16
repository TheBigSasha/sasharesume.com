import { WorksPage } from 'components/pages/works/WorksPage'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getAllProjects, getSettings } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { HomePagePayload, ProjectPayload, SettingsPayload } from 'types'

const WorksPagePreview = lazy(
  () => import('components/pages/works/WorksPagePreview'),
)

interface PageProps {
  projects: ProjectPayload[]
  settings: SettingsPayload
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function IndexPage(props: PageProps) {
  const { projects, settings, preview, token } = props
  const page = {
    showcaseProjects: projects,
    title: 'All Projects & Jobs',
    overview: [],
  }
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <WorksPage page={page} settings={settings} preview={preview} />
          </PreviewWrapper>
        }
      >
        <WorksPagePreview token={token} />
      </PreviewSuspense>
    )
  }

  return <WorksPage page={page} settings={settings} />
}

const fallbackPage: HomePagePayload = {
  title: '',
  overview: [],
  showcaseProjects: [],
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, projects] = await Promise.all([
    getSettings({ token }),
    getAllProjects({ token }),
  ])

  return {
    props: {
      projects,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
