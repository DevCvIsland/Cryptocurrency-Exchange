import { useState } from 'react'
import { Row, Col, Button, Form, Input } from 'antd'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'
import Head from '../../containers/head/Head'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import MarketTable from './MarketTable'

const Market = () => {
  const [searchWord, setSearchWord] = useState()
  const handleFilter = (event: any) => {
    setSearchWord(event.target.value)
  }

  return (
    <>
      <Head title="Market" />
      <Layout>
        <TitleBanner firstTitle="Binance" lastTitle="Markets" />
        <Row justify="space-around" className="market-section">
          <Col
            xs={22}
            sm={13}
            md={10}
            lg={10}
            xl={11}
            className="market-button-list"
          >
            <Button size="large" className="button">
              All
            </Button>
            <Button size="large" className="button-outline">
              Cryptocurrencies
            </Button>
            <Button size="large" className="button-outline">
              Exchanges
            </Button>
            <Button size="large" className="button-outline">
              Metaverse
            </Button>
            <Button size="large" className="button-outline">
              NFT
            </Button>
            <Button size="large" className="button-outline">
              Gaming
            </Button>
          </Col>
          <Col xs={22} sm={10} md={10} lg={6} xl={5}>
            <Form name="search">
              <Form.Item
                name="search"
                rules={[
                  { required: true, message: 'Please input your coin name!' },
                ]}
              >
                <Input
                  prefix={searchWord ? <CloseOutlined /> : <SearchOutlined />}
                  placeholder="Search Coin Name"
                  size="large"
                  onChange={handleFilter}
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
            <MarketTable searchWord={searchWord} />
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default Market
