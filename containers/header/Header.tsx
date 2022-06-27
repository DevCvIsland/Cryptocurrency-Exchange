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
  const menuItems = [
    {
      title: 'Home',
      key: '',
    },
    {
      title: 'Markets',
      key: 'market',
    },
    {
      title: 'Services',
      key: 'services',
    },
    {
      title: 'Blog',
      key: 'blog',
    },
    {
      title: 'About',
      key: 'about',
    },
    {
      title: 'Contact',
      key: 'contact',
    },
  ]

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
        {menuItems.map((item) => (
          <Menu.Item
            className={`menu-item ${
              router.pathname === `/${item.key}` ? 'active-menu-item' : ''
            } ${
              item.key !== '' && router.pathname.includes(`${item.key}`)
                ? 'active-menu-item'
                : ''
            }`}
            key={item.key}
          >
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
    </>
  )
}

export default Header
