import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  allBlogPostsQuery,
  allProjectsQuery,
  blogPostsBySlugQuery,
  blogPostsByTagQuery,
  homePageQuery,
  homePageTitleQuery,
  pagePaths,
  pagesBySlugQuery,
  projectBySlugQuery,
  projectPaths,
  projectsByTagQuery,
  projectsListPageQuery,
  resumeFileBySlugQuery,
  settingsQuery,
  TAGDETAILS_BY_TAG_QUERY,
  tagPaths,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import type {
  BlogPostPayload,
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  ResumeDownload,
  SettingsPayload,
  ShowcaseProject,
  TagDetails,
} from 'types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getProjectsListPage({
  token,
}: {
  token?: string
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(projectsListPageQuery)
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
  //@ts-ignore
  return await sanityClient(token)?.fetch(projectsByTagQuery, { tag })
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

export async function getAllProjects({
  token,
}: {
  token?: string
}): Promise<ProjectPayload[]> {
  return await sanityClient(token)?.fetch(allProjectsQuery)
}

export async function getTagPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(tagPaths)
}

export async function getPagePaths(): Promise<string[]> {
  return await sanityClient()?.fetch(pagePaths)
}

export async function getDownloadsPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(
    `*[_type == "ResumeDownload" && slug.current != null].slug.current`,
  )
}

export async function getBlogPostsByTag({
  tag,
  token,
}: {
  tag: string
  token?: string
}): Promise<BlogPostPayload[] | undefined> {
  //@ts-ignore
  return await sanityClient(token)?.fetch(blogPostsByTagQuery, { tag })
}

export async function getBlogPostPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(
    `*[_type == "blogPost" && slug.current != null].slug.current`,
  )
}

export async function getBlogPostBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<BlogPostPayload | undefined> {
  return await sanityClient(token)?.fetch(blogPostsBySlugQuery, { slug })
}

export async function getAllBlogPosts({
  token,
}): Promise<BlogPostPayload[] | undefined> {
  return await sanityClient(token)?.fetch(allBlogPostsQuery)
}

export async function getTagDetailsByTag({
  tag,
  token,
}: {
  tag: string
  token?: string
}): Promise<TagDetails | undefined> {
  //@ts-ignore
  return await sanityClient(token)?.fetch(TAGDETAILS_BY_TAG_QUERY, { tag })
}
