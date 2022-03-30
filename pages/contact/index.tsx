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
      <Row justify="center" align="top">
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
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
              <Col xs={24} sm={24} md={8} lg={8} xl={11}>
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
              <Col xs={24} sm={24} md={8} lg={8} xl={11}>
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
              <Col xs={24} sm={24} md={8} lg={8} xl={11}>
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
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={11}>
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
                  <Input
                    placeholder="Last name"
                    size="large"
                    className="input"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={24}>
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
              <Col xs={24} sm={24} md={8} lg={8} xl={24}>
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
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={6} className="contact-info">
          <Row justify="start" align="top">
            <Col>
              <HomeFilled className="contact-info-icon" />
            </Col>
            <Col>
              <p>Address</p>
              <p>123 Disney Street Slim Av. Brooklyn Bridge, NY, New York</p>
            </Col>
          </Row>
          <Row justify="start" align="top">
            <Col xs={12} sm={10} md={8} lg={8} xl={2}>
              <PhoneFilled className="contact-info-icon" />
            </Col>
            <Col>
              <p>Phone Numbers</p>
              <p>+88 0123 4567 890</p>
              <p>+88 0231 3421 453</p>
            </Col>
          </Row>
          <Row justify="start" align="top">
            <Col>
              <MessageFilled className="contact-info-icon" />
            </Col>
            <Col>
              <p>Email Addresses</p>
              <p>contact@example.com</p>
              <p>info@example.com</p>
            </Col>
          </Row>
          <Row justify="start" align="top">
            <Col>
              <ProfileFilled className="contact-info-icon" />
            </Col>
            <Col>
              <p>Social Profiles</p>
              <Row className="social-profiles-icon">
                <InstagramFilled />
                <FacebookFilled />
                <TwitterSquareFilled />
                <GooglePlusSquareFilled />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default Contact
