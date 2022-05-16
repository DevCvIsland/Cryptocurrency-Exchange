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
    <div className="crypto-portfolio-item">
      {children}
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

const CryptoPortfolio = () => {
  return (
    <Row justify="space-around">
      <Col xs={20} className="crypto-portfolio-title-section">
        <h3>Build your crypto portfolio</h3>
        <p>Start your first trade with these easy steps.</p>
      </Col>
      <Col xs={24} sm={24} md={12} lg={10} xl={12}>
        <CryptoPortfolioItem
          title="Fund your account"
          description="Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods."
        >
          <UserOutlined className="crypto-portfolio-icon" />
        </CryptoPortfolioItem>
        <CryptoPortfolioItem
          title="Verify your identity"
          description="Complete the identity verification process to secure your account and transactions."
        >
          <SecurityScanOutlined className="crypto-portfolio-icon" />
        </CryptoPortfolioItem>
        <CryptoPortfolioItem
          title="Start trading"
          description="You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer."
        >
          <LineChartOutlined className="crypto-portfolio-icon" />
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
      <Col
        xs={12}
        sm={6}
        md={8}
        lg={6}
        xl={5}
        className="crypto-portfolio-image"
      >
        <Image src={Mobile} alt="crypto portfolio image" />
      </Col>
    </Row>
  )
}

export default CryptoPortfolio
