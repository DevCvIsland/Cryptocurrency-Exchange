import { Row, Col, Button } from 'antd'
import {
  UserOutlined,
  HistoryOutlined,
  CommentOutlined,
  TagsOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

type BlogPostProps = {
  id: string
  title: string
  image: StaticImageData
}

const BlogPost = ({ id, title, image }: BlogPostProps) => {
  return (
    <Row align="middle" className="blog-post">
      <Col xs={24}>
        <h3>{title}</h3>
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
        <Link href={`./blog/${id}`}>
          <Button size="large" className="button" block>
            Read More
          </Button>
        </Link>
      </Col>
      <Row className="blog-post-footer">
        <Col>
          <UserOutlined />
          <p>admin</p>
        </Col>
        <Col>
          <HistoryOutlined />
          <p> 9 November 2021</p>
        </Col>
        <Col>
          <CommentOutlined />
          <p>18 comments</p>
        </Col>
        <Col>
          <TagsOutlined />
          <p>market, cryptocurrency, trading</p>
        </Col>
        <Col>
          <LinkOutlined />
          <p>permalink</p>
        </Col>
      </Row>
    </Row>
  )
}

export default BlogPost
