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
    title: 'Market Cap',
    dataIndex: 'marketCap',
    key: 'marketCap',
  },
]

const numOfSkeleton = ['a', 'b', 'c', 'd', 'e']

const dataSource = numOfSkeleton.map((skeleton) => ({
  key: { skeleton },
  name: <Skeleton.Avatar active size="large" shape="circle" />,
  price: <Skeleton.Button active size="small" shape="round" block />,
  changeOf24h: <Skeleton.Button active size="small" shape="round" block />,
  marketCap: <Skeleton.Button active size="small" shape="round" block />,
}))

const HomeTableSkeleton = () => {
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

export default HomeTableSkeleton
