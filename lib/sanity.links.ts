import * as types from '../types'
import { ExternalMenuItem, InternalMenuItem } from '../types'

export function resolveHref(
  documentType?: string,
  slug?: string | { slug: { current: string } } | { current: string }
): string | undefined {
  if (!slug) {
    return '/'
  }
  let slg: string = ''
  if (typeof slug === 'string') {
    slg = slug
    // @ts-ignore
  } else if (typeof slug === 'object' && slug?.slug) {
    // @ts-ignore
    slg = slug.slug.current
    // @ts-ignore
  } else if (typeof slug === 'object' && slug?.current) {
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

export const unifyMenuItems = (
  menuItems: (InternalMenuItem | ExternalMenuItem | types.MenuItem)[],
  indent = 0
) => {
  var menuItemsFlattened = []
  if (!menuItems) {
    return []
  }
  for (var index in menuItems) {
    const item = menuItems[index]
    menuItemsFlattened.push({ ...item, __unifierIndent: indent })
    if (item['menuItems'] != undefined && item._type === 'linkSet') {
      const itm = item as types.MenuItem
      const innerMenuItems = unifyMenuItems(itm.menuItems, indent + 1)
      for (var innerItem of innerMenuItems) {
        menuItemsFlattened.push(innerItem)
      }
    }
  }
  menuItemsFlattened = menuItemsFlattened.map((item) => {
    if (item._type === 'internalLink' || item._type === 'linkSet') {
      item = item as types.MenuItem
      return {
        ...item,
        //@ts-ignore we need to clean this up a lil
        href: resolveHref('internalLink', item.slug) || '',
      }
    }
    if (item._type === 'externalLink') {
      item = item as ExternalMenuItem
      return {
        ...item,
        //@ts-ignore we need to clean this up a lil
        href: item.href || '',
      }
    } else {
      return {
        ...item,
        href:
          resolveHref(item._type, (item as types.MenuItem).slug || '') || '',
      }
    }
  })
  return menuItemsFlattened
}
