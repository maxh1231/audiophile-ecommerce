import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ItemType } from '../utils/types';


const NavComponent = dynamic(() =>
  import('../components/Nav'))

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<ItemType[] | []>([]);
  const [background, setBackground] = useState<string>(' ');
  return (
    <main className={manrope.className}>
      <NavComponent {...pageProps} background={background} setBackground={setBackground} cart={cart} setCart={setCart} />
      <Component {...pageProps} background={background} setBackground={setBackground} cart={cart} setCart={setCart} />
    </main>
  )
}
