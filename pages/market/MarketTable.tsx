import { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import Link from 'next/link'
import { useGetCryptosQuery } from '../../services/CryptoApi'
import numberWithCommas from '../../utils/Utils'
import SkeletonTable from './MarketTableSkeleton'

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
  const { data, isFetching } = useGetCryptosQuery(
    {},
    { pollingInterval: 60000 }
  )
  const [apiData, setApiData] = useState(data)
  useEffect(() => {
    setApiData(data)
  }, [data])
  // const isFetching = true
  console.log('fetching', isFetching)
  console.log('apiData', apiData)

  const dataSource = apiData
    ? apiData.data.map((coin: any) => ({
        key: `${coin.id}`,
        name: (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`}
              alt="logo"
              className="table-logo-item"
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
        volumeOf24h: (
          <p
            className={`table-number-item ${
              isFetching ? 'table-fetching-item' : ''
            }`}
          >
            ${numberWithCommas(coin.quote.USD.volume_24h.toFixed(0))}
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
        <SkeletonTable />
      )}
    </>
  )
}

export default MarketTable
