import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    footer,
    hero,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
      usePerspective,
    },
    title,
    menuItems[] {
      ...,
      _type == "reference" => @-> {
        ...,
        _type == "page" => {
          title,
          "slug": slug.current,
        },
        _type == "SculptureModelEntry" => {
          title,
          "slug": slug.current,
        },
        _type == "home" => {
          title,
          "slug": slug.current,
        },
        _type == "internalLink" => {
          ...,
          "slug": slug.current,
        },
        _type == "externalLink" => {
          ...,
        },
      },
    },

  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
    hero,
    linkCards,
  }
`

export const blogPostsBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage {
      ...,
      "palette": asset->metadata.palette,
    },
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
    usePerspective,
    linkCards,
  }
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`

export const tagPaths = groq`
  *[_type == "tag" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const blogPostPaths = groq`
  *[_type == "blogPost" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
        menuItems[] {
      ...,
      _type == "linkSet" => {
        "slug": slug.current,
        ...,
      },
      _type == "reference" => @-> {
        ...,
        _type == "page" => {
          title,
          "slug": slug.current,
        },
        _type == "SculptureModelEntry" => {
          title,
          "slug": slug.current,
        },
        _type == "home" => {
          title,
          "slug": slug.current,
        },
        _type == "internalLink" => {
          ...,
          "slug": slug.current,
        },
        _type == "externalLink" => {
          ...,
        },
      }
    },

    ogImage,
  }
`

// tags are just strings with no properties
export const projectsByTagQuery = groq`
  *[_type == "project" && $tag in tags]{
    _type,
    coverImage,
     overview,
     "slug": slug.current,
      tags,
      title,
      usePerspective,
  }
`

export const blogPostsByTagQuery = groq`
  *[_type == "blogPost" && $tag in tags]{
    ...,
    "slug": slug.current,
  }
`

export const resumeFileBySlugQuery = groq`
  *[_type == "ResumeDownload" && slug.current == $slug][0] {
    "pdfURL": resumePDF.asset->url,
    title,
  }
`

export const allBlogPostsQuery = groq`
  *[_type == "blogPost"]{
    ...,
    "slug": slug.current,
  }
`
