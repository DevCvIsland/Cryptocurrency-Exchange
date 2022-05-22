import { Menu, Button, Row, Col } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../assets/logo/logo.jpg'

const Header = () => {
  const router = useRouter()
  const handleClick = (event: any) => {
    router.push(`/${event.key}`)
  }

  return (
    <>
      <Row justify="space-between" align="middle" className="logo-section">
        <Col xs={11} sm={12} md={12} lg={12} xl={12}>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/">
            <Image src={Logo} alt="Logo" width={200} height={50} />
          </Link>
        </Col>
        <Col xs={12} sm={10} md={8} lg={8} xl={6} className="button-container">
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/sign-in">
            <Button size="large" className="button button-style">
              Sign In
            </Button>
          </Link>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/sign-up">
            <Button size="large" className="button-outline">
              Sign Up
            </Button>
          </Link>
        </Col>
      </Row>
      <Menu
        onClick={handleClick}
        mode="horizontal"
        theme="dark"
        className="menu flex-row"
      >
        <Menu.Item className="menu-item" key="">
          Home
        </Menu.Item>
        <Menu.Item className="menu-item" key="market">
          Markets
        </Menu.Item>
        <Menu.Item className="menu-item" key="services">
          Services
        </Menu.Item>
        <Menu.Item className="menu-item" key="blog">
          Blog
        </Menu.Item>
        <Menu.Item className="menu-item" key="about">
          About
        </Menu.Item>
        <Menu.Item className="menu-item" key="contact">
          Contact
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Header
