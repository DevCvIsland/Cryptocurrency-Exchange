import { Line } from '@ant-design/plots'
import data from './ChartData'

const DashboardChart = () => {
  const config = {
    data,
    height: 275,
    width: 275,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    smooth: true,
  }

  return (
    <div className="dashboard-chart-section">
      <h3>Profitability</h3>
      <Line {...config} />
    </div>
  )
}

export default DashboardChart
