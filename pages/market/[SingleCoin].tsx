import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'antd'
import { Stock } from '@ant-design/plots'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const SingleCoin = () => {
  const [data, setData] = useState([])
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('fetch data failed', error)
      })
  }
  useEffect(() => {
    asyncFetch()
  }, [])
  const config = {
    data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
  }

  return (
    <Layout>
      <TitleBanner lastTitle="Bitcoin" />
      <Row justify="center">
        <Col xs={20}>
          <div>Bitcoin Price:</div>
          <div>$ 40 000.241</div>
        </Col>
        <Col xs={10}>
          <Stock {...config} />
        </Col>
        <Col xs={6} className="detail-single-coin">
          <h4>Bitcoin Price Calculater</h4>
          <div>
            <div>
              <p>Inventory:</p>
              <p>Qty:</p>
              <p>Price:</p>
            </div>
            <div>
              <p>55.2154</p>
              <p>1.2548</p>
              <p>30000.11</p>
            </div>
          </div>
          <Button size="large" className="buy-button" block>
            Buy
          </Button>
          <Button size="large" className="sell-button" block>
            Sell
          </Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default SingleCoin
