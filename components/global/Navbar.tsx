import Link from 'next/link'
import * as types from 'types'
import { Header, NavMenu, MenuItem, MenuToggle } from 'tbsui'
import { FaDotCircle, FaFilePdf, FaHome, FaMailBulk, FaPersonBooth } from 'react-icons/fa'
import React from 'react'
import styled from 'styled-components'

interface NavbarProps {
  menuItems?: types.MenuItem[],
  siteTitle?: string
}

const NavLink = styled(Link)`
    color: var(--gray-800)
  `

function getIcon(title: "Contact" | "PDF" | "Alexander Aleshchenko" | string){
  const iconProps = {
    size: 16,
  }
  switch(title){
    case "Contact":
      return <FaMailBulk {...iconProps}/>
    case "PDF":
      return <FaFilePdf {...iconProps}/>
    case "Alexander Aleshchenko":
      return <FaHome {...iconProps}/>
    default:
      return <FaDotCircle {...iconProps}/>
  }
}

export function Navbar({ menuItems, siteTitle }: NavbarProps) {
  const items: MenuItem[] = menuItems.map((menuItem: types.MenuItem) => {
    const { title, slug, _type } = menuItem

    return {
      name: title,
      icon: getIcon(title),
      internal: true,
      url: slug ? `/${slug}` : '/',
    }
  })


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
      <Header siteTitle={<Link href={"/"}>{siteTitle}</Link>} active={true} blur={false} leftSlot={<MenuToggle strokeColor={"var(--gray-700)"} toggle={() => setMenuOpen(!menuOpen)} isOpen={menuOpen}/>}/>
    </>
  )
}
