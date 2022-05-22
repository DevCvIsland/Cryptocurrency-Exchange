import { Row, Col, Button } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import MarketTable from './MarketTable'

const Market = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Market" lastTitle="Crypto" />
      <Row justify="space-around" className="Markets-section">
        <Col xs={10}>
          <Button size="large" className="button">
            All
          </Button>{' '}
          <Button size="large" className="button-outline">
            Metaverse
          </Button>{' '}
          <Button size="large" className="button-outline">
            NFT
          </Button>{' '}
          <Button size="large" className="button-outline">
            Gaming
          </Button>
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
