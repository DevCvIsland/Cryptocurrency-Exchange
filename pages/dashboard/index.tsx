// import { Row, Col, Menu } from 'antd'
import React from 'react'
import { Drawer } from 'antd'
// import type { DrawerProps } from 'antd/es/drawer'

const Dashboard = () => {
  // const [visible, setVisible] = useState(true)
  // const onClose = () => {
  //   setVisible(false)
  // }
  return (
    <Drawer
      title="Amir Sadri Dashboard"
      placement="left"
      // onClose={onClose}
      visible
      // extra={
      //   <Space>
      //     <Button onClick={onClose}>Cancel</Button>
      //     <Button type="primary" onClick={onClose}>
      //       OK
      //     </Button>
      //   </Space>
      // }
    >
      <h4>Some contents...</h4>
      <h4>Some contents...</h4>
      <h4>Some contents...</h4>
    </Drawer>
  )
}

export default Dashboard
