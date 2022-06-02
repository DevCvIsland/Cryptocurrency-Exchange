import { Row, Col, Button } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const SingleCoin = () => {
  return (
    <Layout>
      <TitleBanner lastTitle="Bitcoin" />
      <Row justify="center">
        <Col xs={20}>
          <div>title</div>
          <div>price</div>
        </Col>
        <Col xs={10}>Chart</Col>
        <Col xs={10} className="detail-single-coin">
          <h4>Bitcoin Price Calculater</h4>
          <div>
            <p>Inventory: 55.2154</p>
            <p>Qty: 1.2548</p>
            <p>Price: 30000.11</p>
          </div>
          <Button size="large" className="" block>
            Buy
          </Button>
          <Button size="large" className="" block>
            Sell
          </Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default SingleCoin
