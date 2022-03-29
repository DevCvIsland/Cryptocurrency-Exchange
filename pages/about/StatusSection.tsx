import { Row, Col } from 'antd'

const StatusSection = () => {
  return (
    <>
      <div className="status-section">
        <Row className="flex-column status-title">
          <h2>
            Binance <span className="theme-primary-color">Numbers</span>
          </h2>
          <p>
            leading cryptocurrency exchange since day one of Bitcoin
            distribution
          </p>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={6}
            className="status-item status-item-border"
          >
            <p>$77.45B</p>
            <p>Market Cap</p>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={6}
            className="status-item status-item-border"
          >
            <p>165k</p>
            <p>Daily Transactions</p>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={6}
            className="status-item status-item-border"
          >
            <p>1726</p>
            <p>Active Accounts</p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} className="status-item">
            <p>17</p>
            <p>Years On The Market</p>
          </Col>
        </Row>
      </div>
      <Row className="status-band" />
    </>
  )
}

export default StatusSection
