export function resolveHref(
  documentType?: string,
  slug?: string | { slug: { current: string } } | { current: string },
): string | undefined {
  if (!slug) {
    return "/"
  }
  let slg: string = ""
  if (typeof slug === "string") {
    slg = slug
    // @ts-ignore
  } else if (typeof slug === "object" && slug?.slug) {
    // @ts-ignore
    slg = slug.slug.current
    // @ts-ignore
  } else if (typeof slug === "object" && slug?.current) {
    // @ts-ignore
    slg = slug.current
  }


  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slg ? `/${slg}` : undefined
    case 'project':
      return slg ? `/projects/${slg}` : undefined
    case 'tag':
      return slg ? `/projects/category/${slg}` : undefined
    case 'ResumeDownload':
      return slg ? `/downloads/${slg}` : undefined
    case 'blogPost':
      return slg ? `/blog/post/${slg}` : undefined
    case 'blogTag':
      return slg ? `/blog/category/${slg}` : undefined
    case 'internalLink':
      return slg ? `/${slg}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return `/${slg}`
  }
}
