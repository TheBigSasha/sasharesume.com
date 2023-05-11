import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { SettingsPayload } from 'types'

import { SLayout, SLayoutBody } from '../styled/Basic'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
  constrainWidth?: boolean
}

export default function Layout({
  children,
  settings = fallbackSettings,
  preview,
  constrainWidth,
}: LayoutProps) {
  return (
    <>
      <Navbar menuItems={settings?.menuItems} siteTitle={'sasharesume'} />
      <SLayout constrainWidth={constrainWidth}>
        {preview && <PreviewBanner />}
        <SLayoutBody>{children}</SLayoutBody>
        <Footer footer={settings?.footer} />
      </SLayout>
    </>
  )
}
