import { Row, Col, Button, Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import MarketTable from './MarketTable'

const Market = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Market" lastTitle="Crypto" />
      <Row justify="space-around" className="Markets-section">
        <Col xs={22} xl={11}>
          <Button size="large" className="button">
            All
          </Button>{' '}
          <Button size="large" className="button-outline">
            Metaverse
          </Button>{' '}
          <Button size="large" className="button-outline">
            NFT
          </Button>{' '}
          <Button size="large" className="button-outline">
            Gaming
          </Button>
        </Col>
        <Col xs={22} xl={5}>
          <Form
            name="search"
            // form={form}
            // onFinish={onFinish}
          >
            <Form.Item
              name="search"
              rules={[
                { required: true, message: 'Please input your coin name!' },
              ]}
            >
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search Coin Name"
                size="large"
              />
            </Form.Item>
          </Form>
        </Col>
        <Col xs={22} xl={20}>
          <MarketTable />
        </Col>
      </Row>
    </Layout>
  )
}

export default Market
