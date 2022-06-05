import React from 'react'
import { Layout, Menu, Row, Col } from 'antd'
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons'

const {
  // Header, Content, Footer,
  Sider,
} = Layout

const Dashboard = () => (
  <Row>
    <Col xs={4}>
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // eslint-disable-next-line no-console
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          // eslint-disable-next-line no-console
          console.log(collapsed, type)
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item>sssss</Menu.Item>
          <Menu.Item>sssss</Menu.Item>
          <Menu.Item>sssss</Menu.Item>
          <Menu.Item>sssss</Menu.Item>
          <Menu.Item>sssss</Menu.Item>
          <Menu.Item>sssss</Menu.Item>
        </Menu>
      </Sider>
    </Col>
    <Col xs={20}>
      <Row>
        <Col xs={10}>a</Col>
        <Col xs={10}>a</Col>
        <Col xs={10}>a</Col>
        <Col xs={10}>a</Col>
      </Row>
    </Col>
  </Row>
)

export default Dashboard
