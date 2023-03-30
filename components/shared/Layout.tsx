import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { HoverDotsBackground } from 'tbsui'
import { SettingsPayload } from 'types'

import { SBackground, SLayout, SLayoutBody } from '../styled/Basic'

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
      <SBackground>
        <HoverDotsBackground
          auraSize={450}
          auraColor={'var(--accent)'}
          background={'var(--background)'}
          dotColor={'var(--background)'}
          ambient={0.2}
          dotSize={0.5}
          dotOpacity={1}
          style={{ position: 'fixed', top: 0, left: 0 }}
        />
      </SBackground>
      <Navbar menuItems={settings?.menuItems} siteTitle={'sasharesume'} />
      <SLayout constrainWidth={constrainWidth}>
        {preview && <PreviewBanner />}
        <SLayoutBody>{children}</SLayoutBody>
        <Footer footer={settings?.footer} />
      </SLayout>
    </>
  )
}
