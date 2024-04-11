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
                title: (
                  //@ts-ignore we know by logical elimination that this is either a MenuItem or an ExternalMenuItem and one of those has a slug or href
                  <Link key={item.slug} href={item.href}>
                    {item.title === 'Alexander Aleshchenko'
                      ? 'Home'
                      : item.title}
                    {/*TODO: improve menuItem scehma to avoid this*/}
                  </Link>
                ),
                elements: item.menuItems.map((itm) => {
                  //@ts-ignore we know by logical elimination that this is either a MenuItem or an ExternalMenuItem and one of those has a slug or href
                  return {
                    link: (
                      <Link key={itm.slug} href={itm.href}>
                        {itm.title === 'Alexander Aleshchenko'
                          ? 'Home'
                          : itm.title}
                        {/*TODO: improve menuItem scehma to avoid this*/}
                      </Link>
                    ),
                  }
                }),
              }
            }
            return {
              link: (
                //@ts-ignore we know by logical elimination that this is either a MenuItem or an ExternalMenuItem and one of those has a slug or href
                <Link key={item.slug} href={item.href}>
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
