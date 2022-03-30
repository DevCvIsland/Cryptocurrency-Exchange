import { Row, Col, Button } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const Contact = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Get In" lastTitle="Touch" />
      <Row>
        <Col xs={12} sm={10} md={8} lg={8} xl={12}>
          <Row>
            <Col xs={12} sm={10} md={8} lg={8} xl={24}>
              <h3>Feel Free To Drop Us A Message</h3>
              <p>
                Need to speak to us? Do you have any queries or suggestions?
                Please contact us about all enquiries including membership and
                volunteer work using the form below.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              subject
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              email
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              first
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              last
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={24}>
              message
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={24}>
              <Button>Button</Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={10} md={8} lg={8} xl={12}>
          side
        </Col>
      </Row>
    </Layout>
  )
}

export default Contact
