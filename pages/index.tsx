import type { NextPage } from 'next'
import Head from '../containers/head/Head'
import Layout from '../containers/layout/Layout'
import LandingPage from './home/LandingPage'
import PopularCryptocurrencies from './home/PopularCryptocurrencies'
import CryptoPortfolio from './home/CryptoPortfolio'
import BinancePossibilities from './home/BinancePossibilities'
import NeedHelp from './home/NeedHelp'

const Home: NextPage = () => (
  <>
    <Head title="Cryptocurrency Exchange" />
    <Layout>
      <LandingPage />
      <PopularCryptocurrencies />
      <CryptoPortfolio />
      <BinancePossibilities />
      <NeedHelp />
    </Layout>
  </>
)

export default Home
