import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  homePageQuery,
  homePageTitleQuery,
  pagePaths,
  pagesBySlugQuery,
  projectBySlugQuery,
  projectPaths, projectsByTagQuery, resumeFileBySlugQuery,
  settingsQuery, tagPaths
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import type {
  HomePagePayload,
  PagePayload,
  ProjectPayload, ResumeDownload,
  SettingsPayload, ShowcaseProject
} from 'types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getHomePage({
  token,
}: {
  token?: string
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery)
}

export async function getHomePageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(homePageTitleQuery)
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getResumeFileBySlug({
  slug,
  token,
                                            }: {
  slug: string
  token?: string
}): Promise<ResumeDownload | undefined> {
  return await sanityClient(token)?.fetch(resumeFileBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getProjectsByTag({
  tag,
  token,
}: {
  tag: string
  token?: string
}): Promise<ShowcaseProject[] | undefined> {
  return await sanityClient(token)?.fetch(projectsByTagQuery,
    { tag }
  )
}
export async function getSettings({
  token,
}: {
  token?: string
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery)
}

export async function getProjectPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(projectPaths)
}

export async function getTagPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(tagPaths)
}

export async function getPagePaths(): Promise<string[]> {
  return await sanityClient()?.fetch(pagePaths)
}

export async function getDownloadsPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(`*[_type == "ResumeDownload" && slug.current != null].slug.current`)
}
