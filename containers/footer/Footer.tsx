import { Row, Col } from 'antd'
import Image from 'next/image'
import PAYMENT_METHOD_1 from '../../assets/payment/paypal.png'
import PAYMENT_METHOD_2 from '../../assets/payment/visa.png'
import PAYMENT_METHOD_3 from '../../assets/payment/mastercard.png'
import PAYMENT_METHOD_4 from '../../assets/payment/maestro.png'
import PAYMENT_METHOD_5 from '../../assets/payment/american-express.png'

type FooterContainerProps = {
  title: string
  items: string[]
}

const FooterContainer = ({ title, items }: FooterContainerProps) => {
  return (
    <Col xs={12} sm={6} md={6} lg={6} xl={6} className="footer-container">
      <h2 className="title">{title}</h2>
      <ul className="footer-items">
        {items.map((item: string) => (
          <li key={item} className="footer-item">
            {item}
          </li>
        ))}
      </ul>
    </Col>
  )
}

const Footer = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <FooterContainer
          title="Products"
          items={['Exchange', 'Academy', 'NFT', 'Wallet']}
        />
        <FooterContainer
          title="Service"
          items={['Desktop App', 'Mobile App', 'VIP Services', 'Referral']}
        />
        <FooterContainer
          title="About Us"
          items={['Community', 'News', 'Terms', 'Privacy']}
        />
        <FooterContainer
          title="Support"
          items={[
            'Give Us Feedback',
            'API Documentation',
            'Binance Verify',
            'Trading Rules',
          ]}
        />
      </Row>
      <Row justify="center" align="middle" className="peyment-methods">
        <Image src={PAYMENT_METHOD_1} alt="peyment" width={40} height={25} />
        <Image src={PAYMENT_METHOD_2} alt="peyment" width={40} height={25} />
        <Image src={PAYMENT_METHOD_3} alt="peyment" width={40} height={25} />
        <Image src={PAYMENT_METHOD_4} alt="peyment" width={40} height={25} />
        <Image src={PAYMENT_METHOD_5} alt="peyment" width={40} height={25} />
      </Row>
      <Row justify="center" align="middle" className="copyright-section">
        Copyright ©2022 All rights reserved | Developed By
        <span className="developer">Amir Sadri</span>
      </Row>
    </>
  )
}

export default Footer
