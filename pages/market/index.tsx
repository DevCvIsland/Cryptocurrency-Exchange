import { Row, Col } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const Market = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Market" lastTitle="Crypto" />
      <Row>
        <Col>header</Col>
        <Col>table</Col>
      </Row>
    </Layout>
  )
}

export default Market
