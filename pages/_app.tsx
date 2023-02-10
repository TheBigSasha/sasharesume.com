import 'styles/index.css'

import { JetBrains_Mono, Manrope, Cormorant } from '@next/font/google'
import { AppProps } from 'next/app'

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300','500', '700', '800'],
})

const serif = Cormorant({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['600','700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  )
}
