import { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic';


const NavComponent = dynamic(() =>
  import('../components/Nav'))

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavComponent />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
