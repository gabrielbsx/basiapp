import '../assets/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/auth-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
