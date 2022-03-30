import { Row, Col, Form, Input, Button } from 'antd'
import {
  HomeFilled,
  PhoneFilled,
  MessageFilled,
  ProfileFilled,
  InstagramFilled,
  FacebookFilled,
  TwitterSquareFilled,
  GooglePlusSquareFilled,
} from '@ant-design/icons'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const Contact = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Layout>
      <TitleBanner firstTitle="Get In" lastTitle="Touch" />
      <Row>
        <Col xs={12} sm={10} md={8} lg={8} xl={18}>
          <Row>
            <Col xs={12} sm={10} md={8} lg={8} xl={24}>
              <h3>Feel Free To Drop Us A Message</h3>
              <p>
                Need to speak to us? Do you have any queries or suggestions?
                Please contact us about all enquiries including membership and
                volunteer work using the form below.
              </p>
            </Col>
          </Row>
          <Row>
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
                <Input
                  placeholder="First Name"
                  size="large"
                  className="input"
                />
              </Form.Item>
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
            </Form>
            {/* <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              subject
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              email
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              first
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={12}>
              last
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={24}>
              message
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={24}>
              <Button>Button</Button>
            </Col> */}
          </Row>
        </Col>
        <Col xs={12} sm={10} md={8} lg={8} xl={6}>
          <Row>
            <Col>
              <HomeFilled />
            </Col>
            <Col>
              <p>Address</p>
              <p>123 Disney Street Slim Av. Brooklyn Bridge, NY, New York</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <PhoneFilled />
            </Col>
            <Col>
              <p>Phone Numbers</p>
              <p>+88 0123 4567 890</p>
              <p>+88 0231 3421 453</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <MessageFilled />
            </Col>
            <Col>
              <p>Email Addresses</p>
              <p>contact@example.com</p>
              <p>info@example.com</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProfileFilled />
            </Col>
            <Col>
              <p>socail</p>
              <Row>
                <p>
                  <InstagramFilled />
                </p>
                <p>
                  <FacebookFilled />
                </p>
                <p>
                  <TwitterSquareFilled />
                </p>
                <p>
                  <GooglePlusSquareFilled />
                </p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default Contact
