import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { DefaultSeo } from "next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
