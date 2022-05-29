import { Table, Button } from 'antd'
import Link from 'next/link'

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

const dataSource = [
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

const MarketTable = () => {
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
