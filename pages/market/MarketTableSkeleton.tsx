import { Table, Skeleton } from 'antd'

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

const numOfSkeleton = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const dataSource = numOfSkeleton.map((skeleton) => ({
  key: { skeleton },
  name: <Skeleton.Avatar active size="large" shape="circle" />,
  price: <Skeleton.Button active size="small" shape="round" block />,
  changeOf24h: <Skeleton.Button active size="small" shape="round" block />,
  volumeOf24h: <Skeleton.Button active size="small" shape="round" block />,
  marketCap: <Skeleton.Button active size="small" shape="round" block />,
  action: <Skeleton.Button active size="small" shape="round" block />,
}))

const MarketTableSkeleton = () => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      scroll={{ x: 'max-content' }}
    />
  )
}

export default MarketTableSkeleton
