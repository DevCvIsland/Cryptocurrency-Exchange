import { Row, Col, Button } from 'antd'
import {
  UserOutlined,
  SecurityScanOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import Image from 'next/image'
import Mobile from '../../assets/root/crypto-portfolio.png'

type CryptoPortfolioItemProps = {
  title: string
  description: string
  children: React.ReactNode
}

const CryptoPortfolioItem = ({
  title,
  description,
  children,
}: CryptoPortfolioItemProps) => {
  return (
    <div>
      {children}
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

const CryptoPortfolio = () => {
  return (
    <Row>
      <Col xs={24}>
        <h3>Build your crypto portfolio</h3>
        <p>Start your first trade with these easy steps.</p>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <CryptoPortfolioItem
          title="Fund your account"
          description="Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods."
        >
          <UserOutlined />
        </CryptoPortfolioItem>
        <CryptoPortfolioItem
          title="Verify your identity"
          description="Complete the identity verification process to secure your account and transactions."
        >
          <SecurityScanOutlined />
        </CryptoPortfolioItem>
        <CryptoPortfolioItem
          title="Start trading"
          description="You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer."
        >
          <LineChartOutlined />
        </CryptoPortfolioItem>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="button"
        >
          Get Started
        </Button>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Image src={Mobile} alt="started img" />
      </Col>
    </Row>
  )
}

export default CryptoPortfolio
