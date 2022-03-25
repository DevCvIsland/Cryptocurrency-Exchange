import { useState } from 'react'
import { Menu, Button, Row, Col } from 'antd'
import Image from 'next/image'
import Logo from '../../assets/logo/logo.jpg'

// const { SubMenu } = Menu

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
    <>
      <Row justify="space-between" align="middle" className="logo-section">
        {/* <Row justify="space-between" align="middle"> */}
        <Col xs={12} sm={8}>
          <Image
            src={Logo}
            alt="Picture of the author"
            width={200}
            height={50}
          />
        </Col>
        {/* <Col xs={24} sm={16}>
            <p>Buy, trade, and hold 600+ cryptocurrencies on Binance</p>
          </Col> */}
        {/* </Row> */}
        <Col xs={12} sm={8}>
          <Button type="primary">Sign In</Button>
          <Button>Sign Up</Button>
        </Col>
      </Row>
      {/* <div className="logo-section">
        <div>
          <Image
            src={Logo}
            alt="Picture of the author"
            width={200}
            height={50}
          />
          <p>Buy, trade, and hold 600+ cryptocurrencies on Binance</p>
        </div>
        <div>
          <Button type="primary">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div> */}
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="market">Markets</Menu.Item>
        <Menu.Item key="services">Services</Menu.Item>
        <Menu.Item key="blog">Blog</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
        {/* <SubMenu key="SubMenu" title="Navigation Three - Submenu">
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
      </Menu.Item> */}
      </Menu>
    </>
  )
}

export default Header
