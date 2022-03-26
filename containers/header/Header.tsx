import { useState } from 'react'
import { Menu, Button, Row, Col } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/logo/logo.jpg'

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
        <Col xs={11} sm={12} md={12} lg={12} xl={12}>
          <Image src={Logo} alt="Logo" width={200} height={50} />
        </Col>
        <Col xs={12} sm={10} md={8} lg={8} xl={6} className="button-container">
          <Button className="button button-style">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button className="button-outline">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </Col>
      </Row>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        className="menu flex-row"
      >
        <Menu.Item className="menu-item" key="home">
          <Link href="/">
            <p className="menu-item-text">Home</p>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="market">
          <Link href="/market">
            <p className="menu-item-text">Markets</p>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="services">
          <Link href="/services">
            <p className="menu-item-text">Services</p>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="blog">
          <Link href="/blog">
            <p className="menu-item-text">Blog</p>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="about">
          <Link href="/about">
            <p className="menu-item-text">About</p>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="contact">
          <Link href="/contact">
            <p className="menu-item-text">Contact</p>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Header
