import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Row, Col, Button, Input, Spin, Breadcrumb, Divider } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Stock } from '@ant-design/plots'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import data from './ChartData'
import {
  useGetCryptosQuery,
  useGetCryptosInfoQuery,
} from '../../services/CryptoApi'
import Head from '../../containers/head/Head'
import numberWithCommas from '../../utils/Utils'

const antIcon = (
  <LoadingOutlined spin style={{ fontSize: 75, color: '#f3ba2f' }} />
)

const SingleCoinPage = () => {
  const router = useRouter()
  const { SingleCoin } = router.query
  const { data: coinData } = useGetCryptosInfoQuery(SingleCoin)
  const { data: moreData, isFetching } = useGetCryptosQuery(
    {},
    { pollingInterval: 60000 }
  )
  const [apiData, setApiData] = useState(moreData)
  useEffect(() => {
    setApiData(moreData)
  }, [moreData])
  // eslint-disable-next-line no-console
  console.log('coinData', coinData)
  const coinId = coinData ? Object.keys(coinData.data)[0] : 1
  const moreCoinInfo =
    coinData && apiData
      ? // eslint-disable-next-line eqeqeq
        apiData.data.filter((coin: any) => coin.id == coinId)
      : null
  // eslint-disable-next-line no-console
  console.log('moreCoinInfo', moreCoinInfo)
  const total = moreCoinInfo && 100 * moreCoinInfo[0].quote.USD.price
  const config = {
    data,
    height: 400,
    width: 400,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
  }

  return (
    <>
      <Head title={coinData ? coinData.data[coinId].name : 'Market'} />
      <Layout>
        {coinData ? (
          <>
            <TitleBanner lastTitle={coinData.data[coinId].name} />
            <Row justify="center">
              <Col
                xs={23}
                sm={23}
                md={23}
                lg={23}
                xl={19}
                className="single-coin-breadcrumb"
              >
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link href="/market">Market</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/market">Cryptocurrencies</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {coinData.data[coinId].name}
                  </Breadcrumb.Item>
                </Breadcrumb>
                <Divider />
              </Col>
              <Col
                xs={23}
                sm={23}
                md={23}
                lg={23}
                xl={19}
                className="info-section-single-coin"
              >
                <div className="info-header-single-coin">
                  <div className="flex-row">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`}
                      alt={`${coinData.data[coinId].slug} logo`}
                    />
                    <h4>{coinData.data[coinId].name}</h4>
                    <span>{coinData.data[coinId].symbol}</span>
                  </div>
                  <div className="price-info-single-coin">
                    <p className={isFetching ? 'table-fetching-item' : ''}>
                      $
                      {moreCoinInfo && moreCoinInfo[0].quote.USD.price > 1
                        ? numberWithCommas(
                            moreCoinInfo[0].quote.USD.price.toFixed(2)
                          )
                        : moreCoinInfo[0].quote.USD.price.toFixed(6)}
                    </p>
                    <div
                      className={`${
                        moreCoinInfo[0].quote.USD.percent_change_24h >= 0
                          ? 'positive-background-color'
                          : 'negative-background-color'
                      } ${isFetching ? 'table-fetching-item' : ''}`}
                    >
                      {moreCoinInfo[0].quote.USD.percent_change_24h >= 0
                        ? `+${moreCoinInfo[0].quote.USD.percent_change_24h.toFixed(
                            2
                          )}`
                        : moreCoinInfo[0].quote.USD.percent_change_24h.toFixed(
                            2
                          )}
                      %
                    </div>
                  </div>
                </div>
                <p>{coinData.data[coinId].description}</p>
              </Col>
              <Col xs={24} sm={23} md={23} lg={14} xl={12}>
                <Stock {...config} />
              </Col>
              <Col
                xs={23}
                sm={23}
                md={15}
                lg={9}
                xl={7}
                className="detail-single-coin"
              >
                <h4>Trade Calculater</h4>
                <div>
                  <div>
                    <p>{coinData.data[coinId].name}:</p>
                    <p>Wallet:</p>
                    <p>Amount:</p>
                    <p>Price:</p>
                    <p>Total:</p>
                  </div>
                  <div>
                    <Input
                      defaultValue={`${coinData.data[coinId].symbol} / USDT`}
                      readOnly
                    />
                    <Input defaultValue="Binance" />
                    <Input defaultValue="100" />
                    <Input
                      defaultValue={
                        moreCoinInfo && moreCoinInfo[0].quote.USD.price > 1
                          ? `$${numberWithCommas(
                              moreCoinInfo[0].quote.USD.price.toFixed(2)
                            )}`
                          : `$${moreCoinInfo[0].quote.USD.price.toFixed(5)}`
                      }
                    />
                    <Input
                      defaultValue={`$${
                        total > 1
                          ? numberWithCommas(total.toFixed(2))
                          : total.toFixed(6)
                      }`}
                    />
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
          </>
        ) : (
          <Row justify="center">
            <Spin
              className="single-coin-loading-spinner"
              size="large"
              indicator={antIcon}
            />
          </Row>
        )}
      </Layout>
    </>
  )
}

export default SingleCoinPage
