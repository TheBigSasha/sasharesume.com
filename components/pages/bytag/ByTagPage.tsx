import Head from 'next/head'
import HomePageHead from '../home/HomePageHead'
import Layout from '../../shared/Layout'
import { SShowcaseProjectWrapper, SSpacing } from '../../styled/Basic'
import { Header } from '../../shared/Header'
import { resolveHref } from '../../../lib/sanity.links'
import Link from 'next/link'
import { ProjectListItem } from '../home/ProjectListItem'
import { SettingsPayload, ShowcaseProject } from '../../../types'

interface ByTagPageProps {
  projects: ShowcaseProject[];
  settings: SettingsPayload;
  tag: string;
  preview: boolean;
}
export function ByTagPage({ tag, settings, preview, projects }: ByTagPageProps) {
 const title = tag;
  return (
    <>
      <Head>
        <HomePageHead page={{
          title: tag,
          overview: [],
          showcaseProjects: []
        }} settings={settings} />
      </Head>

      <Layout settings={settings} preview={preview}>
        <SSpacing>
          {/* Header */}
          {title && (
            <Header
              centered
              title={title}
              animateTitle
              description={[]}
            />
          )}
          {/* Showcase projects */}
          {projects && projects.length > 0 && (
            <SShowcaseProjectWrapper>
              {projects.map((project, key) => {
                if (!project) {
                  return null
                }
                const href = resolveHref(project._type, project.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link
                    replace
                    key={key}
                    href={`${href}`}
                    id={`${project.slug}`}
                    scroll={false}
                  >
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </SShowcaseProjectWrapper>
          )}
        </SSpacing>
      </Layout>
    </>
  )
}
