import { Row, Col, Button, Table } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useGetCryptosQuery } from '../../services/CryptoApi'

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
  {
    key: '5',
    name: 'Bitcoin',
    lastPrice: '$308',
    changeOf24h: '+2.25%',
    marketCap: '$50,404M',
  },
]

const PopularCryptocurrencies = () => {
  const { data } = useGetCryptosQuery({})
  // eslint-disable-next-line no-console
  console.log('data', data)

  return (
    <Row justify="center" className="popular-cryptocurrencies-section">
      <Col xs={20} className="popular-cryptocurrencies-title-section">
        <h3>Popular cryptocurrencies</h3>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href="./market">
          <Button type="link">
            View more markets <RightOutlined />
          </Button>
        </Link>
      </Col>
      <Col xs={20}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: 'max-content' }}
        />
      </Col>
      <Col xs={20} className="popular-cryptocurrencies-footer-section">
        <p>Sign up now to build your own portfolio for free!</p>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="button"
          block
        >
          Get Started
        </Button>
      </Col>
    </Row>
  )
}

export default PopularCryptocurrencies
