import { Row, Col } from 'antd'
import {
  HomeFilled,
  PhoneFilled,
  MessageFilled,
  ProfileFilled,
  FacebookFilled,
  TwitterSquareFilled,
  GooglePlusSquareFilled,
} from '@ant-design/icons'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import ContactForm from './ContactForm'

type ContactInfoItemProps = {
  children: React.ReactNode
  title: string
  text: string[]
}

const ContactInfoItem = ({ children, title, text }: ContactInfoItemProps) => {
  return (
    <Row justify="space-between" align="top">
      <Col xs={3} sm={3} md={3} lg={3} xl={2}>
        {children}
      </Col>
      <Col
        xs={20}
        sm={21}
        md={21}
        lg={21}
        xl={20}
        className="contact-info-text"
      >
        <p>{title}</p>
        {text.map((txt) => (
          <p key={txt}>{txt}</p>
        ))}
      </Col>
    </Row>
  )
}

const Contact = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Get In" lastTitle="Touch" />
      <Row justify="center" align="top" className="contact-section">
        <Col xs={23} sm={20} md={20} lg={13} xl={12} className="contact-form">
          <Row justify="center" align="middle">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="contact-form-title"
            >
              <h3>Feel Free To Drop Us A Message</h3>
              <p>
                Need to speak to us? Do you have any queries or suggestions?
                Please contact us about all enquiries including membership and
                volunteer work using the form below.
              </p>
            </Col>
          </Row>
          <ContactForm />
        </Col>
        <Col xs={23} sm={20} md={15} lg={9} xl={6} className="contact-info">
          <ContactInfoItem
            title="Address"
            text={['123 Disney Street Slim Av. Brooklyn Bridge, NY, New York']}
          >
            <HomeFilled className="contact-info-icon" />
          </ContactInfoItem>
          <ContactInfoItem
            title="Phone Numbers"
            text={['+88 0123 4567 890', '+88 0231 3421 453']}
          >
            <PhoneFilled className="contact-info-icon" />
          </ContactInfoItem>
          <ContactInfoItem
            title="Email Addresses"
            text={['contact@example.com', 'info@example.com']}
          >
            <MessageFilled className="contact-info-icon" />
          </ContactInfoItem>
          <Row justify="space-between" align="top">
            <Col xs={3} sm={3} md={3} lg={3} xl={2}>
              <ProfileFilled className="contact-info-icon" />
            </Col>
            <Col
              xs={20}
              sm={21}
              md={21}
              lg={21}
              xl={20}
              className="contact-info-text"
            >
              <p>Social Profiles</p>
              <Row className="social-profiles-icon">
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
