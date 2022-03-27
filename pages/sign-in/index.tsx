import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import Link from 'next/link'

const SignIn = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row justify="center" align="middle" className="sign-in-section">
      <Col>
        <h2 className="flex-row sign-in-title">
          Member
          <span className="title-keyword theme-primary-color">Sign In</span>
        </h2>
        <p className="sign-in-text-style">
          Send, receive and securely store your coins in your wallet
        </p>
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
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input placeholder="Username" size="large" className="input" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Input.Password
              placeholder="password"
              size="large"
              className="input"
            />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Checkbox className="form-item">Remember me</Checkbox>
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
              className="button"
            >
              Sign In
            </Button>
          </Form.Item>
          <div className="flex-row sign-in-text-style">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            don't have an account?
            <Link href="/sign-up">
              <p className="theme-primary-color">Sign Up</p>
            </Link>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default SignIn
