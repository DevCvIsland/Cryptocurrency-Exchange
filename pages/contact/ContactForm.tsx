import { Row, Col, Form, Input, Button } from 'antd'

type FormItemProps = {
  type: string
  children: React.ReactNode
}

const FormItem = ({ type, children }: FormItemProps) => {
  return (
    <Form.Item
      name={type}
      rules={[
        {
          required: true,
          message: `Please input your ${type}!`,
        },
      ]}
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
    >
      {children}
    </Form.Item>
  )
}

const ContactForm = () => {
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
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
          <FormItem type="subject">
            <Input placeholder="Subject" size="large" className="input" />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <FormItem type="email">
            <Input placeholder="Email" size="large" className="input" />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <FormItem type="first name">
            <Input placeholder="First Name" size="large" className="input" />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <FormItem type="last name">
            <Input placeholder="Last Name" size="large" className="input" />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <FormItem type="message">
            <Input.TextArea rows={5} size="large" placeholder="Message" />
          </FormItem>
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
