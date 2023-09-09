import type { AppProps } from 'next/app'
import { ChakraProvider } from '@/components/ChakraProvider'
import NavHero from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavHero />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
