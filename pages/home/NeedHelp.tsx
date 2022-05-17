import { Row, Col } from 'antd'
import {
  WechatOutlined,
  QuestionCircleOutlined,
  FileTextOutlined,
} from '@ant-design/icons'

type HelpItemsProps = {
  title: string
  description: string
  children: React.ReactNode
}

const HelpItems = ({ children, title, description }: HelpItemsProps) => {
  return (
    <Col xs={6} className="need-help-item">
      {children}
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>button</p>
      </div>
    </Col>
  )
}

const NeedHelp = () => {
  return (
    <Row justify="center" className="need-help-section">
      <Col xs={20}>
        <h3>Need Help?</h3>
      </Col>
      <HelpItems
        title="24/7 Chat Support"
        description="Get 24/7 chat support with our friendly customer service agents at your service."
      >
        <WechatOutlined className="need-help-icon" />
      </HelpItems>
      <HelpItems
        title="FAQs"
        description="View FAQs for detailed instructions on specific features."
      >
        <QuestionCircleOutlined className="need-help-icon" />
      </HelpItems>
      <HelpItems
        title="Blog"
        description="Stay up to date with the latest stories and commentary."
      >
        <FileTextOutlined className="need-help-icon" />
      </HelpItems>
    </Row>
  )
}

export default NeedHelp
