import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <ul>
          <li><Link href={'/'} >Home page</Link></li>
          <li><Link href={'/about'} >about page</Link></li>
        </ul>
        <Component {...pageProps} />
      </div>
  )
}
