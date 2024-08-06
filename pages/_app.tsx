import 'styles/index.scss'
import 'tbsui-ssr/dist/assets/components/organisms/navmenu/navmenu.css'
import 'tbsui-ssr/dist/assets/styles/responsive.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Inter, JetBrains_Mono, Manrope } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'

import { Footer } from '../components/global/Footer'
import { Navbar } from '../components/global/Navbar'
import { SettingsPayload } from '../types'

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '500', '700', '800'],
})

const serif = Inter({
  variable: '--font-serif',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['500', '700'],
})

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

const ContextWrappedPage = (props) => {
  const { Component, pageProps, pathname } = props
  const component = <Component {...pageProps} />
  const settings: SettingsPayload = pageProps?.settings || fallbackSettings

  return (
    <>
      {component}
      <Footer footer={settings?.footer} />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // only animate if coming from a page in the site
  const settings: SettingsPayload = pageProps?.settings || fallbackSettings

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
  return (
    <>
      <SpeedInsights />
      <Script
        id={'ga1'}
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Analytics />
      <Script id={'ga2'} strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>
      {!router?.pathname.startsWith('/studio') && (
        <Navbar
          menuItems={settings?.menuItems}
          siteTitle={settings?.siteTitle}
        />
      )}
      <ContextWrappedPage
        Component={Component}
        pageProps={pageProps}
        pathname={router.pathname}
      />
    </>
  )
}
