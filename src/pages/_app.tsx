import type { AppProps } from 'next/app'
import Link from 'next/link'
import {UiStoreContext, useInitUiStore} from '@/store/uiStore'

export default function App({ Component, pageProps }: AppProps) {
    const store = useInitUiStore(pageProps)

  return (
      <UiStoreContext.Provider value={store}>
          <div>
              <ul>
                  <li><Link href={'/'} >Home page</Link></li>
                  <li><Link href={'/about'} >about page</Link></li>
              </ul>
              <Component {...pageProps} />
          </div>
      </UiStoreContext.Provider>
  )
}
