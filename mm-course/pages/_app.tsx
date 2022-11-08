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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#244f5c" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6467325004781249"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />

      <DefaultSeo
        titleTemplate="%s |  HunterDox"
        openGraph={{
          title: "Hunter",
          type: "website",
          locale: "utf-8",
          url: "https://hunterdox.com",
          description:
            "Choose from online video courses with new additions published every month",
          site_name: "HunterDox | Hunter Dox | online video courses platform",
          images: [
            {
              url: "https://api.hunterdox.com/uploads/images_c272b0c798.jpeg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
        canonical={"https://hunterdox.com/"}
      />
    </>
  )
}

export default MyApp
