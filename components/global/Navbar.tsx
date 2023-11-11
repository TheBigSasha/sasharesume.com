import Link from 'next/link'
import React from 'react'
import * as types from 'types'
import { LogoWrapper } from '../styled/Basic'
import logo from '../../public/favicon/favicon.svg'
import { SNavHeaderWrapper } from '../styled/Basic'
import { resolveHref, unifyMenuItems } from '../../lib/sanity.links'
import { ResponsiveNavMenu } from 'tbsui-ssr'
import { ExternalMenuItem } from 'types'

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
          links={menuItems.map((item, index) => {
            const href = item.slug
            return {
              link: (
                //@ts-ignore we know by logical elimination that this is either a MenuItem or an ExternalMenuItem and one of those has a slug or href
                <Link key={item.slug} href={item.href}>
                  {item.title === 'Alexander Aleshchenko' ? 'Home' : item.title}{' '}
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
