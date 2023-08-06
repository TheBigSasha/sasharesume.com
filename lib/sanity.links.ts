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
      console.log(`Tag slug: ${slug}`)
      return slug ? `/projects/category/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
