import { Row, Col, Button, Table, Spin } from 'antd'
import { RightOutlined, LoadingOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useGetCryptosQuery } from '../../services/CryptoApi'

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

const antIcon = (
  <LoadingOutlined spin style={{ fontSize: 75, color: '#f3ba2f' }} />
)

const PopularCryptocurrencies = () => {
  const { data } = useGetCryptosQuery({})
  const dataSource = data
    ? data.data
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
              <p className="table-name-item">{coin.name}</p>
              <span className="table-symbol-item">/ {coin.symbol}</span>
            </>
          ),
          price: (
            <p className="table-number-item">
              $
              {coin.quote.USD.price > 1
                ? coin.quote.USD.price.toFixed(2)
                : coin.quote.USD.price.toFixed(6)}
            </p>
          ),
          changeOf24h: (
            <p
              className={`table-number-item ${
                coin.quote.USD.percent_change_24h >= 0
                  ? 'positive-color'
                  : 'negative-color'
              }`}
            >
              {coin.quote.USD.percent_change_24h >= 0
                ? `+${coin.quote.USD.percent_change_24h.toFixed(2)}`
                : coin.quote.USD.percent_change_24h.toFixed(2)}
              %
            </p>
          ),
          marketCap: (
            <p className="table-number-item">
              ${coin.quote.USD.market_cap.toFixed(0)}
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
            View more markets <RightOutlined />
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
          <Spin
            className="home-table-loading-spinner"
            size="large"
            indicator={antIcon}
          />
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
