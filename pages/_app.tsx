import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/Store'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../containers/header/styles/Styles.css'
import '../containers/footer/styles/Styles.css'
import './home/styles/Styles.css'
import './market/styles/Styles.css'
import './sign-in/styles/Styles.css'
import './sign-up/styles/Styles.css'
import './dashboard/styles/Styles.css'
import '../components/title-banner/styles/Styles.css'
import './services/styles/Styles.css'
import './about/styles/Styles.css'
import './contact/styles/Styles.css'
import './blog/styles/Styles.css'
import '../components/blog-post/styles/Styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
