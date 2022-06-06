import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Coin',
    dataIndex: 'coin',
    key: 'coin',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
]

const dataSource = [
  {
    key: '1',
    coin: 'Bitcoin',
    amount: '2.844',
    price: '$30000.49',
    date: '6/6/2022 - 21:46',
  },
  {
    key: '1',
    coin: 'Bitcoin',
    amount: '2.844',
    price: '$30000.49',
    date: '6/6/2022 - 21:46',
  },
  {
    key: '1',
    coin: 'Bitcoin',
    amount: '2.844',
    price: '$30000.49',
    date: '6/6/2022 - 21:46',
  },
  {
    key: '1',
    coin: 'Bitcoin',
    amount: '2.844',
    price: '$30000.49',
    date: '6/6/2022 - 21:46',
  },
]

const DashboardTable = () => {
  return (
    <>
      <h3>Last Trades</h3>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
        }}
        scroll={{ x: 'max-content' }}
      />
    </>
  )
}

export default DashboardTable
