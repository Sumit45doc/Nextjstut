import Footer from '@/layout/footer'
import Header from '@/layout/header/header'
import 'styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) return Component.getLayout(<> <Head>
    <title>universal title</title>
    <meta name="description" content="universal decription" />
  </Head><Component {...pageProps} /></>)

  return (
    <>
      <Head>
        <title>universal title</title>
        <meta name="description" content="universal decription" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
