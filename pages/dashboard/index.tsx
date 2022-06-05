import React from 'react'
import { Layout, Menu, Row, Col, Divider } from 'antd'
import {
  // UploadOutlined,
  UserOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

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
          <Menu.Item>
            <UserOutlined />
            Summary
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Profile
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Reports
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            News
          </Menu.Item>
          <Divider>Settings</Divider>
          <Menu.Item>
            <UserOutlined />
            Notifications
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Conversations
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Privacy
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Security
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Financial
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Devices
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            Language
          </Menu.Item>
          <Divider>Help</Divider>
          <Menu.Item>
            <UserOutlined />
            Ask a Question
          </Menu.Item>
          <Menu.Item>
            <UserOutlined />
            FAQ
          </Menu.Item>
        </Menu>
      </Sider>
    </Col>
    <Col xs={24} md={20}>
      <Row className="dashboard-container">
        <Col xs={11}>Circles</Col>
        <Col xs={11}>Monitor</Col>
        <Col xs={11}>Chart</Col>
        <Col xs={11}>Table</Col>
      </Row>
    </Col>
  </Row>
)

export default Dashboard
