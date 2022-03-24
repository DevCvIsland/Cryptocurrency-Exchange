import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../containers/header/Styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
