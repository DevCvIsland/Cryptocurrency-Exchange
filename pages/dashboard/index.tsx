import React from 'react'
import { Layout, Menu, Row, Col, Divider } from 'antd'
import {
  UserOutlined,
  FileDoneOutlined,
  IdcardOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
  SecurityScanOutlined,
  NotificationOutlined,
  WechatOutlined,
  DollarCircleOutlined,
  DesktopOutlined,
  GlobalOutlined,
  MonitorOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import RingProgress from './RingProgress'
import GaugeProgress from './GaugeProgress'
import DashboardChart from './DashboardChart'
import DashboardTable from './DashboardTable'

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
          <Menu.Item className="dashboard-menu-item">
            <IdcardOutlined />
            Summary
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <UserOutlined />
            Profile
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <FileDoneOutlined />
            Reports
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <MonitorOutlined />
            News
          </Menu.Item>
          <Divider>Settings</Divider>
          <Menu.Item className="dashboard-menu-item">
            <NotificationOutlined />
            Notifications
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <WechatOutlined />
            Conversations
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <SecurityScanOutlined />
            Privacy
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <SafetyCertificateOutlined />
            Security
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <DollarCircleOutlined />
            Financial
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <DesktopOutlined />
            Devices
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <GlobalOutlined />
            Language
          </Menu.Item>
          <Divider>Help</Divider>
          <Menu.Item className="dashboard-menu-item">
            <QuestionCircleOutlined />
            Ask a Question
          </Menu.Item>
          <Menu.Item className="dashboard-menu-item">
            <InfoCircleOutlined />
            FAQ
          </Menu.Item>
        </Menu>
      </Sider>
    </Col>
    <Col xs={24} md={20}>
      <Row className="dashboard-container">
        <Col xs={11}>
          <RingProgress />
        </Col>
        <Col xs={11}>
          <GaugeProgress />
        </Col>
        <Col xs={11}>
          <DashboardChart />
        </Col>
        <Col xs={11}>
          <DashboardTable />
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Dashboard
