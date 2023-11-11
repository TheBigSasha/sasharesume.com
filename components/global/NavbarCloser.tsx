"use client"
import { useEffect } from "react"
import { NAV_MENU_TOGGLE_ID } from "tbsui-ssr"
import { usePathname } from "next/navigation"

export const NavbarCloser = () => {

  const path = usePathname()
  useEffect(() => {
    const input = document.getElementById(NAV_MENU_TOGGLE_ID) as HTMLInputElement;
    if (input && input.checked) {
      input.checked = false;
    }
  }, [path])
  return null
}