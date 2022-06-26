import { Table, Button, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
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
    title: '24h Volume',
    dataIndex: 'volumeOf24h',
    key: 'volumeOf24h',
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCap',
    key: 'marketCap',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
]

const antIcon = (
  <LoadingOutlined spin style={{ fontSize: 75, color: '#f3ba2f' }} />
)

const MarketTable = () => {
  const { data } = useGetCryptosQuery({})

  const dataSource = data
    ? data.data.map((coin: any) => ({
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
        volumeOf24h: (
          <p className="table-number-item">
            ${coin.quote.USD.volume_24h.toFixed(0)}
          </p>
        ),
        marketCap: (
          <p className="table-number-item">
            ${coin.quote.USD.market_cap.toFixed(0)}
          </p>
        ),
        action: (
          // eslint-disable-next-line @next/next/link-passhref
          <Link href={`/market/${coin.slug}`}>
            <Button type="link" size="large" className="market-table-button">
              Detail / Trade
            </Button>
          </Link>
        ),
      }))
    : null

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data ? (
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            position: ['bottomCenter'],
          }}
          scroll={{ x: 'max-content' }}
        />
      ) : (
        <Spin
          className="market-table-loading-spinner"
          size="large"
          indicator={antIcon}
        />
      )}
    </>
  )
}

export default MarketTable
