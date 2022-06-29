import { useEffect, useState } from 'react'
import { Row, Col, Button, Table } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useGetCryptosQuery } from '../../services/CryptoApi'
import numberWithCommas from '../../utils/Utils'
import SkeletonTable from './HomeTableSkeleton'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '24h Change',
    dataIndex: 'changeOf24h',
    key: 'changeOf24h',
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCap',
    key: 'marketCap',
  },
]

const PopularCryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery(
    {},
    { pollingInterval: 60000 }
  )
  const [apiData, setApiData] = useState(data)
  useEffect(() => {
    setApiData(data)
  }, [data])
  const dataSource = apiData
    ? apiData.data
        .filter(
          (coin: any) =>
            coin.symbol === 'BTC' ||
            coin.symbol === 'ETH' ||
            coin.symbol === 'ADA' ||
            coin.symbol === 'DOGE' ||
            coin.symbol === 'SHIB'
        )
        .map((coin: any) => ({
          key: `${coin.id}`,
          name: (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="table-logo-item"
                src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`}
                alt="logo"
              />
              <p className="table-name-item">{coin.name}</p>
              <span className="table-symbol-item">/ {coin.symbol}</span>
            </>
          ),
          price: (
            <p
              className={`table-number-item ${
                isFetching ? 'table-fetching-item' : ''
              }`}
            >
              $
              {coin.quote.USD.price > 1
                ? numberWithCommas(coin.quote.USD.price.toFixed(2))
                : coin.quote.USD.price.toFixed(6)}
            </p>
          ),
          changeOf24h: (
            <p
              className={`table-number-item ${
                coin.quote.USD.percent_change_24h >= 0
                  ? 'positive-color'
                  : 'negative-color'
              } ${isFetching ? 'table-fetching-item' : ''}`}
            >
              {coin.quote.USD.percent_change_24h >= 0
                ? `+${coin.quote.USD.percent_change_24h.toFixed(2)}`
                : coin.quote.USD.percent_change_24h.toFixed(2)}
              %
            </p>
          ),
          marketCap: (
            <p
              className={`table-number-item ${
                isFetching ? 'table-fetching-item' : ''
              }`}
            >
              ${numberWithCommas(coin.quote.USD.market_cap.toFixed(0))}
            </p>
          ),
        }))
    : null

  return (
    <Row justify="center" className="popular-cryptocurrencies-section">
      <Col xs={20} className="popular-cryptocurrencies-title-section">
        <h3>Popular cryptocurrencies</h3>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href="./market">
          <Button type="link">
            View Market <RightOutlined />
          </Button>
        </Link>
      </Col>
      <Col xs={20} className="popular-cryptocurrencies-table-section">
        {data ? (
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: 'max-content' }}
          />
        ) : (
          <SkeletonTable />
        )}
      </Col>
      <Col xs={20} className="popular-cryptocurrencies-footer-section">
        <p>Sign up now to build your own portfolio for free!</p>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="button"
          block
        >
          Get Started
        </Button>
      </Col>
    </Row>
  )
}

export default PopularCryptocurrencies
