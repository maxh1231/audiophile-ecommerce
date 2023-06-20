import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from '@next/font/google';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { ItemType } from '../utils/types';
import { calcNumItems } from '../utils/helpers';


const NavComponent = dynamic(() =>
  import('../components/Nav'))

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<ItemType[] | []>([]);
  const [background, setBackground] = useState<string>(' ');
  const [numItems, setNumItems] = useState<number>(0)

  useEffect(() => {
    let localStorageCart = localStorage.getItem("cart") as string;
    if (localStorageCart) {
      if (JSON.parse(localStorageCart).length > 0) {
        setCart(JSON.parse(localStorageCart));
        setNumItems(calcNumItems(JSON.parse(localStorageCart)));
      }
    }
  }, [])

  useEffect(() => {
    let localStorageCart = localStorage.getItem("cart") as string;
    console.log('hit')
    if (localStorageCart) {
      setNumItems(calcNumItems(JSON.parse(localStorageCart)))
    }
  }, [cart])
  return (
    <main className={manrope.className}>
      <NavComponent {...pageProps} background={background} setBackground={setBackground} cart={cart} setCart={setCart} numItems={numItems} setNumItems={setNumItems} />
      <Component {...pageProps} background={background} setBackground={setBackground} cart={cart} setCart={setCart} numItems={numItems} setNumItems={setNumItems} />
    </main>
  )
}
