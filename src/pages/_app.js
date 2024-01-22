import Footerend from '@/components/Footerend'
import Loading from '@/components/Loader'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Loading />
    <Component {...pageProps} />
    <Footerend />
  </>
}
