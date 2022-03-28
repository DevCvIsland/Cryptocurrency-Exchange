import { Row, Col } from 'antd'
import Image from 'next/image'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import DownloadBitcoin from '../../assets/icon/download-bitcoin.png'

const ServiceContainer = () => {
  return (
    <Col xs={24} sm={15} md={8} lg={8} xl={8} className="service-container">
      <Image src={DownloadBitcoin} alt="Logo" width={100} height={100} />
      <div>
        <p>Bitcoin Escrow Service</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </Col>
  )
}

const Services = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Our" lastTitle="Services" />
      <Row justify="center" align="middle">
        <ServiceContainer />
        <ServiceContainer />
        <ServiceContainer />
        <ServiceContainer />
      </Row>
    </Layout>
  )
}

export default Services
