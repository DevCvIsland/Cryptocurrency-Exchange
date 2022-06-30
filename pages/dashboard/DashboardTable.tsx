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
        <span className="table-symbol-item">/ BTC</span>
      </>
    ),
    amount: <p className="table-number-item">8.619</p>,
    price: <p className="table-number-item">$20,049.97</p>,
    date: <p className="table-number-item">2022/06/10 - 22:53</p>,
  },
  {
    key: '2',
    coin: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
          alt="logo"
          className="table-logo-item"
        />
        <p className="table-name-item">Ethereum</p>
        <span className="table-symbol-item">/ ETH</span>
      </>
    ),
    amount: <p className="table-number-item">10.581</p>,
    price: <p className="table-number-item">$1,094.94</p>,
    date: <p className="table-number-item">2022/05/24 - 09:12</p>,
  },
  {
    key: '3',
    coin: (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/32x32/1958.png"
          alt="logo"
          className="table-logo-item"
        />
        <p className="table-name-item">Tron</p>
        <span className="table-symbol-item">/ TRX</span>
      </>
    ),
    amount: <p className="table-number-item">46.512</p>,
    price: <p className="table-number-item">$0.064566</p>,
    date: <p className="table-number-item">2022/04/08 - 13:55</p>,
  },
]

const DashboardTable = () => {
  return (
    <div className="dashboard-table-section">
      <h3>Last Trades</h3>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  )
}

export default DashboardTable
