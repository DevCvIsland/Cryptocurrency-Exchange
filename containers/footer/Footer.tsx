import { Row, Col } from 'antd'

const FooterContainer = ({ title, items }: any & string[]) => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
      <h2 className="title">{title}</h2>
      <ul className="footer-items">
        {items.map((item: string) => (
          <li key={item}>{item}</li>
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
      <Row justify="center" align="middle">
        Copyright ©2022 All rights reserved | Developed By
        {/* <strong> */}
        <span className="developer">Amir Sadri</span>
        {/* </strong> */}
      </Row>
    </>
  )
}

export default Footer
