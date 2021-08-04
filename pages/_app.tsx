import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import '../styles/tailwind.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AnimateSharedLayout>
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component key="comp" {...pageProps} />
      </AnimatePresence>
    </>
    // </AnimateSharedLayout>
  )
}
export default MyApp
