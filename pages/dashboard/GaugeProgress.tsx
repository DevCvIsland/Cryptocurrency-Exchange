import React from 'react'
import { Gauge } from '@ant-design/plots'

const GaugeProgress = () => {
  const config = {
    height: 250,
    width: 250,
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '20px',
          lineHeight: '20px',
        },
      },
    },
  }
  return (
    <div className="gauge-progress-section">
      <h3>Technicals</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        hic placeat ea possimus, nihil distinctio suscipit, deleniti eos,
        nostrum incidunt sit quis
      </p>
      <Gauge {...config} />
    </div>
  )
}

export default GaugeProgress
