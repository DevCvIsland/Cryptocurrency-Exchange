import { Row, Col, Form, Input, Button } from 'antd'

const ContactForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      style={{ width: '100%' }}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: 'Please input your subject!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input placeholder="Subject" size="large" className="input" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input placeholder="Email" size="large" className="input" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <Form.Item
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input placeholder="First Name" size="large" className="input" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please input your lastname!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input placeholder="Last name" size="large" className="input" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input.TextArea rows={5} placeholder="Message" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
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
              className="button"
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default ContactForm
