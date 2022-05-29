import { Row, Col } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const SingleCoin = () => {
  return (
    <Layout>
      <TitleBanner lastTitle="Bitcoin" />
      <Row justify="center">
        <Col xs={10}>Chart</Col>
        <Col xs={10}>Detail</Col>
      </Row>
    </Layout>
  )
}

export default SingleCoin
