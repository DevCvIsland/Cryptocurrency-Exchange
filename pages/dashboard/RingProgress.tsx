import React from 'react'
import { Row, Col } from 'antd'
import { RingProgress } from '@ant-design/plots'

const RingProgressComponent = () => {
  const config1 = {
    height: 140,
    width: 140,
    autoFit: false,
    percent: 0.2,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#fff',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Funding',
      },
    },
  }
  const config2 = {
    height: 140,
    width: 140,
    autoFit: false,
    percent: 0.4,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Spot',
      },
    },
  }
  const config3 = {
    height: 140,
    width: 140,
    autoFit: false,
    percent: 0.9,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'ETF',
      },
    },
  }
  const config4 = {
    height: 140,
    width: 140,
    autoFit: false,
    percent: 0.6,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Investment',
      },
    },
  }
  return (
    <div className="ring-progress-section">
      <h3>Final Report</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        hic placeat ea possimus, nihil distinctio suscipit, deleniti eos,
        nostrum incidunt sit quis.
      </p>
      <Row className="ring-progress-container">
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <RingProgress {...config1} />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <RingProgress {...config2} />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <RingProgress {...config3} />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <RingProgress {...config4} />
        </Col>
      </Row>
    </div>
  )
}

export default RingProgressComponent
