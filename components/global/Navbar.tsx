import Link from 'next/link'
import * as types from 'types'
import { Header, NavMenu, MenuItem, MenuToggle } from 'tbsui'
import { FaDotCircle } from 'react-icons/fa'
import React from 'react'
import styled from 'styled-components'

interface NavbarProps {
  menuItems?: types.MenuItem[],
  siteTitle?: string
}

export function Navbar({ menuItems, siteTitle }: NavbarProps) {
  const items: MenuItem[] = menuItems.map((menuItem: types.MenuItem) => {
    const { title, slug, _type } = menuItem

    return {
      name: title,
      icon: <FaDotCircle/>,
      internal: true,
      url: slug ? `/${slug}` : '/',
    }
  })

  const NavLink = styled(Link)`
    color: var(--gray-800)
  `

  const linkComponent = ({to, children}: {to: string, children: React.ReactNode}) => {
    return <NavLink to={to}>{children}</NavLink>
  }

  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <NavMenu navItems={items} menuOpen={menuOpen} toggleMenu={() => {
        setMenuOpen(!menuOpen)
      }
      } linkComponent={linkComponent}/>
      <Header siteTitle={<Link href={"/"}>{siteTitle}</Link>} active={true} blur={false} showName={false} leftSlot={<MenuToggle strokeColor={"var(--gray-700)"} toggle={() => setMenuOpen(!menuOpen)} isOpen={menuOpen}/>}/>
    </>
  )
}
