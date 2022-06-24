import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { Row, Col, Button } from 'antd'
import { Stock } from '@ant-design/plots'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import { useGetCryptosInfoQuery } from '../../services/CryptoApi'

const SingleCoinPage = () => {
  const router = useRouter()
  const { SingleCoin } = router.query
  const { data: infoData } = useGetCryptosInfoQuery(SingleCoin)
  // eslint-disable-next-line no-console
  console.log('infoData', infoData)
  const coinID = infoData ? Object.keys(infoData.data)[0] : 1

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
      <TitleBanner
        lastTitle={infoData ? infoData.data[coinID].name : 'Loading'}
      />
      <Row justify="center">
        {infoData ? (
          <>
            <Col xs={18}>
              <Button size="large" className="button">
                Overview
              </Button>{' '}
              <Button size="large" className="button-outline">
                Market
              </Button>{' '}
              <Button size="large" className="button-outline">
                Historical Data
              </Button>{' '}
              <Button size="large" className="button-outline">
                Holders
              </Button>{' '}
              <Button size="large" className="button-outline">
                Project Info
              </Button>{' '}
              <Button size="large" className="button-outline">
                Wallets
              </Button>{' '}
              <Button size="large" className="button-outline">
                News
              </Button>{' '}
              <Button size="large" className="button-outline">
                Socials
              </Button>{' '}
              <Button size="large" className="button-outline">
                Ratings
              </Button>{' '}
              <Button size="large" className="button-outline">
                Analysis
              </Button>{' '}
              <Button size="large" className="button-outline">
                Price Estimates
              </Button>
            </Col>
            <Col xs={18}>
              {/* <Image
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                width={50}
                height={50}
                alt="coddm"
              /> */}
              <div>{infoData.data[coinID].name} Price:</div>
              <div>$ 30000.41</div>
            </Col>
            <Col xs={12}>
              <Stock {...config} />
            </Col>
            <Col xs={6} className="detail-single-coin">
              <h4>Price Calculater</h4>
              <div>
                <div>
                  <p>Inventory:</p>
                  <p>Amount:</p>
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
          </>
        ) : (
          'Loading...'
        )}
      </Row>
    </Layout>
  )
}

export default SingleCoinPage
