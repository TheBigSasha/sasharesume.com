import 'styles/index.scss'

import { EB_Garamond, JetBrains_Mono, Manrope } from '@next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import {
  PageAnimationProvider,
  usePageAnimation,
} from '../components/shared/AnimateContext'
import { SBackground } from '../components/styled/Basic'
import { HoverDotsBackground } from 'tbsui'

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
const TransitionContainer = styled.span`
  object-fit: none;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`

const ContextWrappedPage = (props) => {
  const { Component, pageProps, pathname } = props
  const { pageAnimation, setPageAnimation } = usePageAnimation()
  const [prevPath, setPrevPath] = useState<string | undefined>(undefined)
  useEffect(() => {
    if (prevPath !== undefined) {
      setPageAnimation(true)
    }
    setPrevPath(pathname)
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
  const initial =
    pathname === '/'
      ? { translateX: '-100vw', translateZ: 0 }
      : { translateX: '100vw', translateZ: 0 }
  const animate =
    pathname === '/'
      ? { translateX: 0, translateZ: 0, opacity: 1 }
      : { translateX: 0, translateZ: 0, opacity: 1 }
  const exit =
    pathname === '/'
      ? { translateX: '-100vw', translateZ: 0 }
      : { translateX: '100vw', translateZ: 0 }

  return (
    <TransitionContainer>
      <AnimatePresence mode={'popLayout'}>
        <motion.div
          transition={transition}
          key={pathname}
          initial={initial}
          animate={animate}
          exit={exit}
          id="page-transition-container"
          style={{ margin: 0, padding: 0 }}
        >
          {/*@ts-ignore*/}
          {component}
        </motion.div>
      </AnimatePresence>
    </TransitionContainer>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // only animate if coming from a page in the site

  return (
    <>
      <Script
        id={'ga1'}
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      />
      <Analytics />
      <Script id={'ga2'} strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
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
      <SBackground>
        <HoverDotsBackground
          auraSize={450}
          auraColor={'var(--accent)'}
          background={'var(--background)'}
          dotColor={'var(--background)'}
          ambient={0.15}
          dotSize={1}
          dotOpacity={0.6}
          style={{ position: 'fixed', top: 0, left: 0 }}
        />
      </SBackground>
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
