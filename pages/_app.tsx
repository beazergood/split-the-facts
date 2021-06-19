import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimateSharedLayout>
  )
}
export default MyApp
