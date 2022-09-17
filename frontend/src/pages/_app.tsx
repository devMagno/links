import { createContext } from 'react'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'

import { fetchAPI } from '../lib/api'
import getStrapiMedia from '../lib/media'
import Media from '../types/Media'

// interface PageProps {
//   global: {
//     attributes: {
//       favicon: Media
//     }
//   }
// }

export const GlobalContext = createContext({})

function MyApp({ Component, pageProps }: AppProps) {
  // const { global } = pageProps as PageProps

  return (
    <>
      {/* <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head> */}

      {/* <GlobalContext.Provider value={global.attributes}> */}
      <Component {...pageProps} />
      {/* </GlobalContext.Provider> */}
    </>
  )
}

// MyApp.getInitialProps = async (ctx: AppContext) => {
//   const appProps = await App.getInitialProps(ctx)
//   const globalRes = await fetchAPI('/global', {
//     populate: {
//       favicon: '*',
//       defaultSeo: {
//         populate: '*',
//       },
//     },
//   })

//   return { ...appProps, pageProps: { global: globalRes.data } }
// }

export default MyApp
