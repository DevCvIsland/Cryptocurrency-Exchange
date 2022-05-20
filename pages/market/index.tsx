import { Row, Col } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const Market = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Market" lastTitle="Crypto" />
      <Row className="Markets-section">
        <Col>
          <h2>All Cryptos</h2>
        </Col>
        <Col>table</Col>
      </Row>
    </Layout>
  )
}

export default Market
