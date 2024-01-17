import type { AppProps } from 'next/app'
import { ChakraProvider } from '@/components/chakra-provider'
import NavHero from '@/components/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavHero />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
