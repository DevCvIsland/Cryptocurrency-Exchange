import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'

const DashboardChart = () => {
  const [data, setData] = useState([])
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('fetch data failed', error)
      })
  }
  useEffect(() => {
    asyncFetch()
  }, [])
  const config = {
    data,
    // padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  }

  return (
    <div className="dashboard-chart-section">
      <Line {...config} />
    </div>
  )
}

export default DashboardChart
