import Layout from 'components/shared/Layout'
import Head from 'next/head'
import type {  ResumeDownload, SettingsPayload } from 'types'

import { LinkCardRender } from '../../global/LinkCard'
import { Header } from '../../shared/Header'
import { SHugeGap } from '../../styled/Basic'

export interface DownloadPageProps {
  download: ResumeDownload | undefined
  settings: SettingsPayload | undefined
  preview?: boolean
}

export function DownloadPage({ download, settings, preview}: DownloadPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { pdfURL, title } = download || {}

  return (
    <>
      <Head>
        <title>sasharesume | Download {title}</title>
      </Head>
      <Layout settings={settings} preview={preview}>
        <Header title={title} />
        <SHugeGap/>
        {/*TODO: Generify downloads*/}
        <LinkCardRender icon={"download"} href={new URL(`${pdfURL}?dl=resume.pdf`)} title={"Download file (pdf)"} color={"rgba(150,231,98,0.3)"}/>
      </Layout>
    </>
  )
}
