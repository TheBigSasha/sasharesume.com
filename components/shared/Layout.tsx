import { PreviewBanner } from 'components/preview/PreviewBanner'
import { SettingsPayload } from 'types'

import { NavbarCloser } from '../global/NavbarCloser'
import { SGap, SLayout, SLayoutBody } from '../styled/Basic'

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  preview?: boolean
  constrainWidth?: boolean
}

export default function Layout({
  children,
  preview,
  constrainWidth,
}: LayoutProps) {
  return (
    <>
      <NavbarCloser />
      <SLayout constrainWidth={constrainWidth}>
        {preview && <PreviewBanner />}
        <SGap />
        <SLayoutBody>{children}</SLayoutBody>
      </SLayout>
    </>
  )
}
