import { Table, Button } from 'antd'

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
      <Button type="link" className="market-table-button">
        Detail / Trade
      </Button>
    ),
  },
  {
    key: '1',
    name: 'Bitcoin',
    price: '$308',
    changeOf24h: '+2.25%',
    volumeOf24h: '30.545322M',
    marketCap: '$50,404M',
    action: (
      <Button type="link" className="market-table-button">
        Detail / Trade
      </Button>
    ),
  },
  {
    key: '1',
    name: 'Bitcoin',
    price: '$308',
    changeOf24h: '+2.25%',
    volumeOf24h: '30.545322M',
    marketCap: '$50,404M',
    action: (
      <Button type="link" className="market-table-button">
        Detail / Trade
      </Button>
    ),
  },
  {
    key: '1',
    name: 'Bitcoin',
    price: '$308',
    changeOf24h: '+2.25%',
    volumeOf24h: '30.545322M',
    marketCap: '$50,404M',
    action: (
      <Button type="link" className="market-table-button">
        Detail / Trade
      </Button>
    ),
  },
  {
    key: '1',
    name: 'Bitcoin',
    price: '$308',
    changeOf24h: '+2.25%',
    volumeOf24h: '30.545322M',
    marketCap: '$50,404M',
    action: (
      <Button type="link" className="market-table-button">
        Detail / Trade
      </Button>
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
    />
  )
}

export default MarketTable
