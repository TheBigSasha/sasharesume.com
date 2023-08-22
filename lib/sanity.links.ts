export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    case 'tag':
      return slug ? `/projects/category/${slug}` : undefined
    case 'ResumeDownload':
      return slug ? `/downloads/${slug}` : undefined
    case 'blogPost':
        return slug ? `/blog/post/${slug}` : undefined
    case 'blogTag':
        return slug ? `/blog/category/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
