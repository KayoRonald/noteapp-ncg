import type { AppProps } from 'next/app'
import { ChakraProvider } from '@/components/ChakraProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
