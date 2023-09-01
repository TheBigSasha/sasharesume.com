import { ResumeDownload, SettingsPayload } from '../../types'
import { notFound } from 'next/navigation'
import { PreviewSuspense } from '@sanity/preview-kit'
import { PreviewWrapper } from '../../components/preview/PreviewWrapper'
import { GetStaticProps } from 'next'
import {
  getDownloadsPaths,
  getResumeFileBySlug,
  getSettings,
} from '../../lib/sanity.client'
import { DownloadPage } from '../../components/pages/download/DownloadPage'
import { resolveHref } from '../../lib/sanity.links'

interface DownloadPageProps {
  download?: ResumeDownload
  settings?: SettingsPayload
  token: string | null
  preview: boolean
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function DownloadSlugRoute(props: DownloadPageProps) {
  const { download, settings, token, preview } = props

  if (!download && !preview) {
    notFound()
  }

  // if (preview) {
  //   return <PreviewSuspense fallback={
  //     <PreviewWrapper>
  //       <DownloadPage
  //         download={download}
  //         settings={settings}
  //         token={token}
  //         preview={preview}
  //       />
  //     </PreviewWrapper>
  //   }>
  //     <DownloadPreview
  //       token={token}
  //       download={download}
  //       settings={settings}
  //     />
  //   </PreviewSuspense>
  // }
  return (
    <DownloadPage download={download} settings={settings} preview={preview} />
  )
}

export const getStaticProps: GetStaticProps<
  DownloadPageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, download] = await Promise.all([
    getSettings({ token }),
    getResumeFileBySlug({ token, slug: params.slug as string }),
  ])

  return {
    props: {
      download,
      settings,
      token: token ?? null,
      preview,
    },
  }
}

export async function getStaticPaths() {
  const slugs = await getDownloadsPaths()
  return {
    paths: slugs.map((slug) => resolveHref('ResumeDownload', slug)),
    fallback: false,
  }
}
