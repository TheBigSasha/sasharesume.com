import 'styles/index.scss'

import { EB_Garamond, JetBrains_Mono, Manrope } from '@next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '500', '700', '800'],
})

const serif = EB_Garamond({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['500', '700'],
})

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
    router.pathname === '/' ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }
  const animate =
    router.pathname === '/' ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
  const exit =
    router.pathname === '/' ? { x: 300, opacity: 0 } : { x: -300, opacity: 0 }

  return (
    <AnimatePresence mode={'wait'}>
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>
      <div className="page-transition-wrapper">
        <motion.div
          transition={transition}
          key={router.pathname}
          initial={initial}
          animate={animate}
          exit={exit}
          id="page-transition-container"
        >
          <Component {...pageProps} />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
