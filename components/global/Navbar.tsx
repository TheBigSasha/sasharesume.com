import Link from 'next/link'
import React from 'react'
import { FaDotCircle, FaFilePdf, FaHome, FaMailBulk } from 'react-icons/fa'
import styled from 'styled-components'
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

const NavLink = styled(Link)`
  color: var(--gray-800);
`

function getIcon(title: 'Contact' | 'PDF' | 'Alexander Aleshchenko' | string) {
  const iconProps = {
    size: 16,
  }
  switch (title) {
    case 'Contact':
      return <FaMailBulk {...iconProps} />
    case 'PDF':
      return <FaFilePdf {...iconProps} />
    case 'Alexander Aleshchenko':
      return <FaHome {...iconProps} />
    default:
      return <FaDotCircle {...iconProps} />
  }
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
