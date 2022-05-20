import { Row, Col } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import MarketTable from './MarketTable'

const Market = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Market" lastTitle="Crypto" />
      <Row justify="space-around" className="Markets-section">
        <Col xs={10}>
          <h2>All Cryptos</h2>
        </Col>
        <Col xs={5}>
          <h2>search box</h2>
        </Col>
        <Col xs={20}>
          <MarketTable />
        </Col>
      </Row>
    </Layout>
  )
}

export default Market
