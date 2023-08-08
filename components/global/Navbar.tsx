import Link from 'next/link'
import React from 'react'
import {
  FaDotCircle,
  FaFilePdf,
  FaHome,
  FaMailBulk,
} from 'react-icons/fa'
import styled from 'styled-components'
import { Header, MenuItem, MenuToggle, NavMenu } from 'tbsui'
import * as types from 'types'

import { SNavHeaderWrapper } from '../styled/Basic'
import { resolveHref } from '../../lib/sanity.links'

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
  const items: MenuItem[] = menuItems.map((menuItem: types.MenuItem) => {
    const { title, slug, _type } = menuItem

    return {
      name: title,
      icon: getIcon(title),
      internal: true,
      url: slug ? resolveHref(_type, slug) : '/',
    }
  })

  const linkComponent = ({
    to,
    children,
  }: {
    to: string
    children: React.ReactNode
  }) => {
    return <NavLink to={to}>{children}</NavLink>
  }

  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <SNavHeaderWrapper>
        <Header
          siteTitle={<Link href={'/'}>{siteTitle}</Link>}
          active={true}
          activeBackground={"var(--tpcard-background-color"}
          leftSlot={
            <MenuToggle
              strokeColor={'var(--gray-700)'}
              toggle={() => setMenuOpen(!menuOpen)}
              isOpen={menuOpen}
            />
          }
          className={'header'}
        >
          {/*TODO: background blur when navmenu is open*/}
          <NavMenu
            blur={true}
            navItems={items}
            menuOpen={menuOpen}
            toggleMenu={() => {
              setMenuOpen(!menuOpen)
            }}
            linkComponent={linkComponent}
          />
        </Header>
      </SNavHeaderWrapper>
    </>
  )
}
