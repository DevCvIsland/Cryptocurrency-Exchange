import { Row, Col } from 'antd'

const FooterContainer = ({ items }: any & string[]) => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
      <h2 className="title">Support</h2>
      <ul className="footer-items">
        {items.map((item: string) => (
          <li key={item.index}>{item}</li>
        ))}
      </ul>
    </Col>
  )
}

const Footer = () => {
  return (
    <>
      <Row justify="space-between" align="middle" className="logo-section">
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <h2 className="title">Support</h2>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        </Col>
        <FooterContainer items={['aaa', 'bbb', 'ccc']} />
      </Row>
      <div>Footer</div>
    </>
  )
}

export default Footer
