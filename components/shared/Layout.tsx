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
}

export default function Layout({
  children,
  settings = fallbackSettings,
  preview,
}: LayoutProps) {
  return (
    <SLayout>
      {preview && <PreviewBanner />}
      <Navbar menuItems={settings?.menuItems} />
      <SLayoutBody>{children}</SLayoutBody>
      <Footer footer={settings?.footer} />
    </SLayout>
  )
}
