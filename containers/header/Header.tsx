import { useState } from 'react'
import { Menu } from 'antd'

const { SubMenu } = Menu

const Header = () => {
  const [state, setState] = useState({
    current: 'mail',
  })
  const handleClick = (e: any) => {
    console.log('click ', e)
    setState({ current: e.key })
  }
  const { current } = state

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="market">Markets</Menu.Item>
      <Menu.Item key="services">Services</Menu.Item>
      <Menu.Item key="blog">Blog</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
      <Menu.Item key="app">Navigation Two</Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="#/" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default Header

// class App extends React.Component {
//   state = {
//     current: 'mail',
