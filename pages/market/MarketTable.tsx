import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Table, Button } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import SkeletonTable from './MarketTableSkeleton'
import numberWithCommas from '../../utils/Utils'
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

type MarketTableProps = {
  searchWord: string | undefined
}

const MarketTable = ({ searchWord }: MarketTableProps) => {
  const { data, isFetching } = useGetCryptosQuery(
    {},
    { pollingInterval: 60000 }
  )
  const [apiData, setApiData] = useState(data)
  useEffect(() => {
    setApiData(data)
  }, [data])
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
  const newFilter =
    data && searchWord
      ? data.data.filter((coin: any) => {
          return coin.name.toLowerCase().includes(searchWord.toLowerCase())
        })
      : undefined
  const searchData = newFilter
    ? newFilter.map((coin: any) => ({
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
  const locale = {
    emptyText: (
      <div className="table-empty-item">
        <ExclamationCircleOutlined />
        <p>Could not find coin</p>
      </div>
    ),
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data ? (
        <Table
          dataSource={
            searchWord !== undefined && searchWord !== ''
              ? searchData
              : dataSource
          }
          columns={columns}
          pagination={{
            position: ['bottomCenter'],
          }}
          scroll={{ x: 'max-content' }}
          locale={locale}
        />
      ) : (
        <SkeletonTable />
      )}
    </>
  )
}

export default MarketTable
