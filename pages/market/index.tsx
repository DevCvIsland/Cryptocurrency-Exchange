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
        <Col xs={22} sm={13} md={10} lg={10} xl={11}>
          <Button size="large" className="button">
            All
          </Button>{' '}
          <Button size="large" className="button-outline">
            Cryptocurrencies
          </Button>{' '}
          <Button size="large" className="button-outline">
            Exchanges
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
        <Col xs={22} sm={10} md={10} lg={6} xl={5}>
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
        <Col
          xs={22}
          sm={22}
          md={22}
          lg={20}
          xl={20}
          className="market-table-container"
        >
          <MarketTable />
        </Col>
      </Row>
    </Layout>
  )
}

export default Market
