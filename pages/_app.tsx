import 'styles/index.scss'
import 'tbsui-ssr/dist/assets/popup-message.css'
import 'tbsui-ssr/dist/assets/navmenu.css'
import 'tbsui-ssr/dist/assets/responsive.css'


import { EB_Garamond, JetBrains_Mono, Manrope } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Footer } from '../components/global/Footer'
import { Navbar } from '../components/global/Navbar'
import {
  PageAnimationProvider,
  usePageAnimation,
} from '../components/shared/AnimateContext'
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

const serif = EB_Garamond({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['500', '700'],
})

// The job of this is to allow the child to translate in and out of the page
const TransitionContainer = styled.body`
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  max-width: 100vw;
  margin: 0;
  padding: 0;
`

const TransitionInterior = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

const ContextWrappedPage = (props) => {
  const { Component, pageProps, pathname } = props
  const { pageAnimation, setPageAnimation } = usePageAnimation()
  const [prevPath, setPrevPath] = useState<string | undefined>(undefined)
  useEffect(() => {
    if (prevPath !== undefined) {
      setPageAnimation(true)
    }
    setPrevPath(pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPageAnimation, pathname])

  const component = <Component {...pageProps} />
  if (!pageAnimation) {
    return component
  }

  const transition = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren',
    duration: {
      enter: 0.2,
      exit: 0.2,
    },
  }
  const isRootPath = pathname === '/' || pathname === '/blog'
  const initial = isRootPath
    ? { translateX: '-100vw', translateZ: 0 }
    : { translateX: '100vw', translateZ: 0 }
  const animate = isRootPath
    ? { translateX: 0, translateZ: 0, opacity: 1 }
    : { translateX: 0, translateZ: 0, opacity: 1 }
  const exit = isRootPath
    ? { translateX: '-100vw', translateZ: 0 }
    : { translateX: '100vw', translateZ: 0 }

  const settings: SettingsPayload = pageProps?.settings || fallbackSettings

  return (
    <>
      <TransitionContainer id={'outer-transition-container'}>
        <AnimatePresence mode={'popLayout'}>
          <TransitionInterior
            transition={transition}
            key={pathname}
            initial={initial}
            animate={animate}
            exit={exit}
            onAnimationStart={() => {
              const hashArg = window.location.hash
              if (!isRootPath && !hashArg) {
                const outer = document.getElementById(
                  'outer-transition-container',
                )
                if (outer) {
                  outer.scrollTop = 0
                }
              }
            }}
            id="page-transition-container"
          >
            {/*@ts-ignore*/}
            {component}
            <Footer footer={settings?.footer} />
          </TransitionInterior>
        </AnimatePresence>
      </TransitionContainer>
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // only animate if coming from a page in the site
  const settings: SettingsPayload = pageProps?.settings || fallbackSettings

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;
  return (
    <>
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
        <Navbar menuItems={settings?.menuItems} siteTitle={'sasharesume'} />
      )}
      <PageAnimationProvider>
        <ContextWrappedPage
          Component={Component}
          pageProps={pageProps}
          pathname={router.pathname}
        />
      </PageAnimationProvider>
    </>
  )
}
