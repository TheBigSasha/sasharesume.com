import type { Image, PortableTextBlock } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
  usePerspective?: boolean
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
  hero?: Hero
  linkCards?: LinkCard[]
}

export interface ProjectPayload {
  _type: string
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
  usePerspective?: boolean
  linkCards?: LinkCard[]
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}


/*
 * This file was automatically generated by thebigsasha's Sanity Codegen. (http://thebigsasha.github.io/sanity_config_creator/)
 * Read more at the link above.
 */
export interface Hero {
  headline: string
  banner: Image
  body: Array<PortableTextBlock>
  href: URL
  title: string
  layout: "left" | "right" | "center"
  cta: {
    title: string
    href: URL
  }
}


/*
    * This file was automatically generated by thebigsasha's Sanity Codegen. (http://thebigsasha.github.io/sanity_config_creator/)
    * Read more at the link above.
*/
export interface ResumeDownload {
  resumePDF: any;
}


/*
    * This file was automatically generated by thebigsasha's Sanity Codegen. (http://thebigsasha.github.io/sanity_config_creator/)
    * Read more at the link above.
*/
export type LinkCardIcon = "instagram" | "facebook" | "linkedin" | "arxiv" | "github" | "threads" | "appstore" | "googleplay" | "whatsapp" | "messenger" | "email" | "photo" | "web" | "tiktok" | "myspace" | "xda" | "npm" | "reddit" | "youtube";
export interface LinkCard {
  icon: LinkCardIcon;
  href: URL;
  title: string;
  color: string;
}
