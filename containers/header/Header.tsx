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
          <Image src={Logo} alt="Logo" width={200} height={50} />
        </Col>
        <Col xs={12} sm={10} md={8} lg={8} xl={6} className="button-container">
          <Button size="large" className="button button-style">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button size="large" className="button-outline">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </Col>
      </Row>
      <Menu
        onClick={handleClick}
        mode="horizontal"
        theme="dark"
        className="menu flex-row"
      >
        <Menu.Item className="menu-item" key="">
          <p className="menu-item-text">Home</p>
        </Menu.Item>
        <Menu.Item className="menu-item" key="market">
          <p className="menu-item-text">Markets</p>
        </Menu.Item>
        <Menu.Item className="menu-item" key="services">
          <p className="menu-item-text">Services</p>
        </Menu.Item>
        <Menu.Item className="menu-item" key="blog">
          <p className="menu-item-text">Blog</p>
        </Menu.Item>
        <Menu.Item className="menu-item" key="about">
          <p className="menu-item-text">About</p>
        </Menu.Item>
        <Menu.Item className="menu-item" key="contact">
          <p className="menu-item-text">Contact</p>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Header
