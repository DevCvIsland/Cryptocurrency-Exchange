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
    coin: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"
          alt="logo"
          className="table-logo-item"
        />
        <p className="table-name-item">Bitcoin</p>
        <span className="table-symbol-item">BTC</span>
      </>
    ),
    amount: '2.844',
    price: '$30000.49',
    date: '2022/06/10 - 13:55',
  },
  {
    key: '2',
    coin: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/32x32/2.png"
          alt="logo"
          className="table-logo-item"
        />
        <p className="table-name-item">Etherium</p>
        <span className="table-symbol-item">/ ETH</span>
      </>
    ),
    amount: '7.214',
    price: '$1800.37',
    date: '2022/05/18 - 17:38',
  },
  {
    key: '3',
    coin: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/32x32/5.png"
          alt="logo"
          className="table-logo-item"
        />
        <p className="table-name-item">Cardano</p>
        <span className="table-symbol-item">/ ADA</span>
      </>
    ),
    amount: '10.670',
    price: '$0.750',
    date: '2022/04/15 - 21:46',
  },
]

const DashboardTable = () => {
  return (
    <div className="dashboard-table-section">
      <h3>Last Trades</h3>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
        }}
        scroll={{ x: 'max-content' }}
      />
    </div>
  )
}

export default DashboardTable
