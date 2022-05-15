import { Row, Col, Form, Input, Button } from 'antd'
import Image from 'next/image'
import Landing from '../../assets/root/landing.png'

type InfoItemProps = {
  title: string
  description: string
}

const InfoItem = ({ title, description }: InfoItemProps) => {
  return (
    <Col xs={6}>
      <p>{title}</p>
      <p>{description}</p>
    </Col>
  )
}

const LandingPage = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row>
      <Col xs={12}>
        <p>Buy, trade, and hold 600+ cryptocurrencies on Binance</p>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: 'Please input your fullname!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input placeholder="Full Name" size="large" className="input" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="button submit-comment"
            >
              Post Comment
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={12}>
        <Image src={Landing} alt="started img" />
      </Col>
      <Row>
        <InfoItem
          title="$76 billion"
          description="24h trading volume on Binance exchange"
        />
        <InfoItem title="600+" description="Cryptocurrencies listed" />
        <InfoItem
          title="90 million"
          description="Registered users who trust Binance"
        />
        <InfoItem title="<0.10%" description="Lowest transaction fees" />
      </Row>
    </Row>
  )
}

export default LandingPage
