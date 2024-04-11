import Link from 'next/link'
import { ResponsiveNavMenu } from 'tbsui-ssr'
import * as types from 'types'
import { unifyMenuItems } from '../../lib/sanity.links'
import logo from '../../public/favicon/favicon.svg'
import { LogoWrapper, SNavHeaderWrapper } from '../styled/Basic'

interface NavbarProps {
  menuItems?: types.MenuItem[]
  siteTitle?: string
}

export function Navbar({ menuItems: mnuis, siteTitle }: NavbarProps) {
  const menuItems = unifyMenuItems(mnuis)
  console.log('MENU ITEMS LOADED')
  console.dir(menuItems)
  function getStyle(indent) {
    if (indent && indent > 0) {
      return {
        marginLeft: `${indent}em`,
      }
    }
  }

  return (
    <>
      <SNavHeaderWrapper>
        <ResponsiveNavMenu
          headerItemPosition="left"
          headerItem={
            <>
              <Link href="/">
                <LogoWrapper>
                  <img src={logo.src} alt={siteTitle} />
                </LogoWrapper>
              </Link>
            </>
          }
          links={menuItems.map((item) => {
            if (item.menuItems && item._type === 'linkSet') {
              return {
                category: item.title || 'Category',
              }
            }
            return {
              link: (
                //@ts-ignore we know by logical elimination that this is either a MenuItem or an ExternalMenuItem and one of those has a slug or href
                <Link
                  key={item.slug}
                  href={item.href}
                  style={getStyle(item.__unifierIndent)}
                >
                  {item.title === 'Alexander Aleshchenko' ? 'Home' : item.title}
                  {/*TODO: improve menuItem scehma to avoid this*/}
                </Link>
              ),
            }
          })}
        ></ResponsiveNavMenu>
      </SNavHeaderWrapper>
    </>
  )
}
