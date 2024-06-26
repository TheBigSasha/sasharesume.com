/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'
import { deskTool } from 'sanity/desk'
import blogPost from 'schemas/documents/blogPost'
import page from 'schemas/documents/page'
import project from 'schemas/documents/project'
import duration from 'schemas/objects/duration'
import embed from 'schemas/objects/embed'
import hero from 'schemas/objects/hero'
import LinkCard from 'schemas/objects/linkcard'
import milestone from 'schemas/objects/milestone'
import timeline from 'schemas/objects/timeline'
import home from 'schemas/singletons/home'
import resume from 'schemas/singletons/resume'
import settings from 'schemas/singletons/settings'
import tagDetails from 'schemas/documents/tagDescription'
import projectsListPage from 'schemas/singletons/projectsListPage'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'sasharesume'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  project.name,
  resume.name,
]

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      resume,
      projectsListPage,
      // Documents
      duration,
      page,
      project,
      blogPost,
      tagDetails,
      // Objects
      LinkCard,
      milestone,
      timeline,
      hero,
      embed,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings, projectsListPage]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    codeInput(),
    media(),
    // scheduledPublishing(),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name, projectsListPage.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
