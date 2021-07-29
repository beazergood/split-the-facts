import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import '../styles/tailwind.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('pageProps: ', pageProps)

  return (
    // <AnimateSharedLayout>
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Navbar key="nav" logoFill={pageProps.logoFill} />
        <Component key="comp" {...pageProps} />
        <Footer footerFill={pageProps.footerFill} />
      </AnimatePresence>
    </>
    // </AnimateSharedLayout>
  )
}
export default MyApp
