import Footer from '../components/footer'
import Header from '../components/header/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) return Component.getLayout(<Component {...pageProps} />)

  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
