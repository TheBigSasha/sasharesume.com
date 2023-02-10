import 'styles/index.css'

import { JetBrains_Mono, Manrope, Noto_Serif_Display } from '@next/font/google'
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

const serif = Noto_Serif_Display({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['100','500','700', '900']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${sans.style.fontFamily}; 
          //  TODO: find a serif font that works well with the sans font
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  )
}
