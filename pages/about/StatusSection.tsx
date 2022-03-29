import { Row, Col } from 'antd'

const StatusSection = () => {
  return (
    <>
      <div className="status-section">
        <Row className="flex-column">
          <h2>Binance Numbers</h2>
          <p>
            leading cryptocurrency exchange since day one of Bitcoin
            distribution
          </p>
        </Row>
        <Row>
          <Col className="status-item status-item-border" xs={6}>
            <p>$77.45B</p>
            <p>Market Cap</p>
          </Col>
          <Col className="status-item status-item-border" xs={6}>
            <p>165k</p>
            <p>Daily Transactions</p>
          </Col>
          <Col className="status-item status-item-border" xs={6}>
            <p>1726</p>
            <p>Active Accounts</p>
          </Col>
          <Col className="status-item" xs={6}>
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
