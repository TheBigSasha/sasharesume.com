import 'styles/index.scss'

import { EB_Garamond, JetBrains_Mono, Manrope } from '@next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import Script from 'next/script'
import styled from 'styled-components'

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
  overflow: hidden;
  object-fit: none;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`

export default function App({ Component, pageProps }: AppProps) {
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren',
    duration: {
      enter: 0.2,
      exit: 0.2,
    },
  }

  const router = useRouter()

  const transition = spring
  const initial =
    router.pathname === '/' ? { translateX: "-100vw", translateZ: 0 } : { translateX: "100vw", translateZ: 0 }
  const animate =
    router.pathname === '/' ? { translateX: 0, translateZ: 0,  opacity: 1 } : { translateX: 0, translateZ: 0,  opacity: 1 }
  const exit =
    router.pathname === '/' ? { translateX: "-100vw", translateZ: 0 } : { translateX: "100vw", translateZ: 0 }

  return (
    <>
      <Script
        id={'ga1'}
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
      />
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
      <TransitionContainer>
      <AnimatePresence mode={'popLayout'}>
          <motion.div
            transition={transition}
            key={router.pathname}
            initial={initial}
            animate={animate}
            exit={exit}
            id="page-transition-container"
            style={{margin: 0, padding: 0, overflowX: 'hidden'}}
          >
            <Component {...pageProps} />
          </motion.div>
      </AnimatePresence>
      </TransitionContainer>
    </>
  )
}
