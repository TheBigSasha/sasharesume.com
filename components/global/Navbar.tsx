import Link from 'next/link'
import React from 'react'
import * as types from 'types'
import { LogoWrapper } from '../styled/Basic'
import logo from '../../public/favicon/favicon.svg'
import { SNavHeaderWrapper } from '../styled/Basic'
import { resolveHref } from '../../lib/sanity.links'
import { ResponsiveNavMenu } from 'tbsui-ssr'
import Image from 'next/image'

interface NavbarProps {
  menuItems?: types.MenuItem[]
  siteTitle?: string
}

export function Navbar({ menuItems, siteTitle }: NavbarProps) {
  return (
    <>
      <SNavHeaderWrapper>
        <ResponsiveNavMenu headerItemPosition='left' headerItem={<>
          <Link href="/">
            <LogoWrapper>
              <Image src={logo} alt={siteTitle || 'Alexander Aleshchenko'} />
            </LogoWrapper>
          </Link>
        </>} links={menuItems.map(
          (menuItem: types.MenuItem) => (
            {link: 
            <Link key={menuItem.slug} href={resolveHref(menuItem._type, menuItem.slug)}>
              {menuItem.title === 'Alexander Aleshchenko' ? 'Home' : menuItem.title} {/*TODO: improve menuItem scehma to avoid this*/}
            </Link>
            }
          )
        )}></ResponsiveNavMenu>
      </SNavHeaderWrapper>
    </>
  )
}
