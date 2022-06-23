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
  // eslint-disable-next-line no-console
  // console.log('data', data.data)
  // console.log('data name', data.data[0].name)
  // console.log('data price', data.data[0].quote.USD.price)

  const dataSource = data
    ? data.data.map((coin: any) => ({
        key: `${coin.id}`,
        name: `${coin.name}`,
        price: `${coin.quote.USD.price}`,
        changeOf24h: `${coin.quote.USD.percent_change_24h}`,
        volumeOf24h: `${coin.quote.USD.volume_24h}`,
        marketCap: `${coin.quote.USD.market_cap}`,
        action: (
          // eslint-disable-next-line @next/next/link-passhref
          <Link href="/market/bitcoin">
            <Button type="link" size="large" className="market-table-button">
              Detail / Trade
            </Button>
          </Link>
        ),
      }))
    : [
        {
          key: '1',
          name: 'Bitcoin',
          price: '$308',
          changeOf24h: '+2.25%',
          volumeOf24h: '30.545322M',
          marketCap: '$50,404M',
          action: (
            // eslint-disable-next-line @next/next/link-passhref
            <Link href="/market/bitcoin">
              <Button type="link" size="large" className="market-table-button">
                Detail / Trade
              </Button>
            </Link>
          ),
        },
      ]

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{
        position: ['bottomCenter'],
      }}
      scroll={{ x: 'max-content' }}
    />
  )
}

export default MarketTable
