import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Last Price',
    dataIndex: 'lastPrice',
    key: 'lastPrice',
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

const dataSource = [
  {
    key: '1',
    name: 'Bitcoin',
    lastPrice: '$308',
    changeOf24h: '+2.25%',
    marketCap: '$50,404M',
  },
  {
    key: '2',
    name: 'Bitcoin',
    lastPrice: '$308',
    changeOf24h: '+2.25%',
    marketCap: '$50,404M',
  },
  {
    key: '3',
    name: 'Bitcoin',
    lastPrice: '$308',
    changeOf24h: '+2.25%',
    marketCap: '$50,404M',
  },
  {
    key: '4',
    name: 'Bitcoin',
    lastPrice: '$308',
    changeOf24h: '+2.25%',
    marketCap: '$50,404M',
  },
]

const DashboardTable = () => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      scroll={{ x: 'max-content' }}
    />
  )
}

export default DashboardTable
