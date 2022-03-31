import { Row, Col, Button } from 'antd'
import Image from 'next/image'
import image from '../../assets/blog/blog-post-1.jpg'

const BlogPost = () => {
  return (
    <Row align="middle" className="blog-post">
      <Col xs={24}>
        <h3>
          How Cryptocurrency Begun and Its Impact To Financial Transactions
        </h3>
      </Col>
      <Col xs={24}>
        <Image src={image} alt="Logo" />
      </Col>
      <Col xs={24}>
        <p className="blog-post-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum ...
        </p>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button size="large" className="button" block>
          Read More
        </Button>
      </Col>
      <Col xs={24}>
        <div>
          <p>admin</p>
        </div>
        <div>
          <p> 9 November 2021</p>
        </div>
        <div>
          <p>18 comments</p>
        </div>
        <div>
          <p>market, cryptocurrency, trading</p>
        </div>
        <div>
          <LinkOutlined />
          <p>permalink</p>
        </div>
      </Col>
    </Row>
  )
}

export default BlogPost
