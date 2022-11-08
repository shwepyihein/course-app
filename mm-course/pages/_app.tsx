import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { DefaultSeo } from "next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="keywords"
          content="tutorial, online courses, free, free courses, courses, programming, video, "
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#244f5c" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />

      <DefaultSeo titleTemplate="%s |  HunterDox" />
    </>
  )
}

export default MyApp
