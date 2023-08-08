import Layout from 'components/shared/Layout'
import Head from 'next/head'
import type {  ResumeDownload, SettingsPayload } from 'types'

import { LinkCardRender } from '../../global/LinkCard'

export interface DownloadPageProps {
  download: ResumeDownload | undefined
  settings: SettingsPayload | undefined
  preview?: boolean
}

export function DownloadPage({ download, settings, preview}: DownloadPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { pdfURL } = download || {}

  return (
    <>
      <Head>
        <title>sasharesume | File Download</title>
      </Head>
      <Layout settings={settings} preview={preview}>
        {/*TODO: Generify downloads*/}
        <LinkCardRender icon={"download"} href={new URL(`${pdfURL}?dl=resume.pdf`)} title={"Download file (pdf)"} color={"rgba(150,231,98,0.3)"}/>
      </Layout>
    </>
  )
}
