import { Row, Col, Button } from 'antd'
import Image from 'next/image'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import Bitcoin from '../../assets/root/about-us.png'

const About = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="About" lastTitle="Us" />
      <Row
        justify="center"
        align="middle"
        className="flex-row description-about-us"
      >
        <Col xs={24} sm={15} md={12} lg={12} xl={12} className="flex-row">
          <Image src={Bitcoin} alt="Bitcoin Image" width={350} height={350} />
        </Col>
        <Col xs={24} sm={15} md={12} lg={12} xl={12}>
          <div>
            <h3>We Are Binance</h3>
            <p>
              A place for everyone who wants to simply buy and sell Bitcoins.
              Deposit funds using your Visa/MasterCard or bank transfer. Instant
              buy/sell of Bitcoins at fair price is guaranteed. Nothing extra.
              Join over 700,000 users from all over the world satisfied with our
              services.
            </p>
          </div>
          <div>
            <h3>Risk Warning</h3>
            <p>
              Bitcoin is not legal tender and is not backed by any government.
              Accounts and value balances are not subject to any government
              backed deposit insurance or any other government protections.
            </p>
          </div>
          <Button className="button" size="large">
            Our Services
          </Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default About
