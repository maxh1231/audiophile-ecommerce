import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google';
import dynamic from 'next/dynamic';


const NavComponent = dynamic(() =>
  import('../components/Nav'))

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <NavComponent />
      <Component {...pageProps} />
    </main>
  )
}
