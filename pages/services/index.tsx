import { Row, Col } from 'antd'
import Image from 'next/image'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import DownloadBitcoin from '../../assets/icon/download-bitcoin.png'
import AddBitcoins from '../../assets/icon/add-bitcoins.png'
import BuySellBitcoins from '../../assets/icon/buy-sell-bitcoins.png'
import HighLiquidity from '../../assets/icon/high-liquidity.png'
import WorldCoverage from '../../assets/icon/world-coverage.png'
import PaymentOptions from '../../assets/icon/payment-options.png'
import Head from '../../containers/head/Head'

type ServiceContainerProps = {
  icon: StaticImageData
  title: string
}

const ServiceContainer = ({ icon, title }: ServiceContainerProps) => {
  return (
    <Col xs={24} sm={22} md={18} lg={11} xl={10} className="service-container">
      <Image src={icon} alt="Services Icon" width={100} height={100} />
      <div>
        <p>{title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio
          aliquam, explicabo corporis, recusandae tempora odit accusamus nostrum
          neque laudantium illo magnam error fugiat impedit ad maxime dolore!
        </p>
      </div>
    </Col>
  )
}

const Services = () => {
  return (
    <>
      <Head title="Services" />
      <Layout>
        <TitleBanner firstTitle="Our" lastTitle="Services" />
        <Row justify="center" align="middle" className="service-section">
          <ServiceContainer
            icon={DownloadBitcoin}
            title="Bitcoin Escrow Service"
          />
          <ServiceContainer icon={AddBitcoins} title="Bitcoin Mining" />
          <ServiceContainer
            icon={BuySellBitcoins}
            title="Software Development"
          />
          <ServiceContainer icon={HighLiquidity} title="Bitcoin Transaction" />
          <ServiceContainer icon={WorldCoverage} title="Bitcoin Exchange" />
          <ServiceContainer icon={PaymentOptions} title="Bitcoin Investment" />
        </Row>
      </Layout>
    </>
  )
}

export default Services
