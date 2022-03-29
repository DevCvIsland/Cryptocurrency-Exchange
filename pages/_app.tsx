import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../containers/header/styles/Styles.css'
import '../containers/footer/styles/Styles.css'
import './sign-in/styles/Styles.css'
import './sign-up/styles/Styles.css'
import '../components/title-banner/styles/Styles.css'
import './services/styles/Styles.css'
import './about/styles/Styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
