import { Row, Col } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const ServiceContainer = () => {
  return (
    <Col xs={24} sm={8} md={12} lg={12} xl={12} className="service-container">
      <div>hello</div>
      <div>
        <p>hhf</p>
        <p>svbsjvbibv</p>
      </div>
    </Col>
  )
}

const Services = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Our" lastTitle="Services" />
      <Row>
        <ServiceContainer />
        <ServiceContainer />
        <ServiceContainer />
        <ServiceContainer />
      </Row>
    </Layout>
  )
}

export default Services
