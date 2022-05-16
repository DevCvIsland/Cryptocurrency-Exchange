import {
  Row,
  Col,
  //  Form, Input, Button
} from 'antd'
// import Image from 'next/image'

const CryptoPortfolio = () => {
  return (
    <Row>
      <Col xs={24}>title</Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <div>
          <p>icon</p>
          <div>
            <p>title</p>
            <p>des</p>
          </div>
        </div>
        <p>button</p>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        image
      </Col>
    </Row>
  )
}

export default CryptoPortfolio
