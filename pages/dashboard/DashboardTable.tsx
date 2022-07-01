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

const LastTradesInfo = [
  {
    id: '1',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: '8.619',
    price: '20,049.97',
    date: '2022/06/10 - 22:53',
  },
  {
    id: '2',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: '10.581',
    price: '1,094.94',
    date: '2022/05/24 - 09:12',
  },
  {
    id: '3',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1958.png',
    name: 'Tron',
    symbol: 'TRX',
    amount: '46.512',
    price: '0.064566',
    date: '2022/04/08 - 13:55',
  },
]

const dataSource = LastTradesInfo.map((coin: any) => ({
  key: coin.id,
  coin: (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={coin.logo} alt="logo" className="table-logo-item" />
      <p className="table-name-item">{coin.name}</p>
      <span className="table-symbol-item">{`/ ${coin.symbol}`}</span>
    </>
  ),
  amount: <p className="table-number-item">{coin.amount}</p>,
  price: <p className="table-number-item">{coin.price}</p>,
  date: <p className="table-number-item">{coin.date}</p>,
}))

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
