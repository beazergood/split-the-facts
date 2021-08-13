import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component key="comp" {...pageProps} />
    </>
  )
}
export default MyApp
