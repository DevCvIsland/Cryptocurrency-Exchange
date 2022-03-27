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
    <Row justify="center" align="middle">
      <Col>
        {/* xs={11} sm={12} md={12} lg={12} xl={12} */}
        <h2>
          Member <span className="theme-primary-color">Sign In</span>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
            <Input placeholder="Username" size="large" />
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
              className="input"
              placeholder="password"
              size="large"
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
              Submit
            </Button>
          </Form.Item>
          <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            don't have an account?
            <Link href="/sign-up">
              <p className="theme-primary-color">Sign Up Now</p>
            </Link>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default SignIn
