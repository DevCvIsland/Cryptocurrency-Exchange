import { Table, Button } from 'antd'
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

const MarketTable = () => {
  const { data } = useGetCryptosQuery({})

  const dataSource = data
    ? data.data.map((coin: any) => ({
        key: `${coin.id}`,
        name: (
          <>
            <p className="table-coin-name">{coin.name}</p>
            <span className="table-coin-symbol">/ {coin.symbol}</span>
          </>
        ),
        price: `$${coin.quote.USD.price.toFixed(5)}`,
        changeOf24h: (
          <p
            className={`${
              coin.quote.USD.percent_change_24h > 1
                ? 'positive-color'
                : 'negative-color'
            }`}
          >
            ${coin.quote.USD.percent_change_24h.toFixed(2)}
          </p>
        ),
        volumeOf24h: `$${coin.quote.USD.volume_24h.toFixed(0)}`,
        marketCap: `$${coin.quote.USD.market_cap.toFixed(0)}`,
        // volumeOf24h: `${`${coin.quote.USD.volume_24h}`.substring(0, 3)}M`,
        // marketCap: `${`${coin.quote.USD.market_cap}`.substring(0, 3)}M`,
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
        'Loading...'
      )}
    </>
  )
}

export default MarketTable
