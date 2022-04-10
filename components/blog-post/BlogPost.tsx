import { Row, Col, Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import BlogPostFooter from './BlogPostFooter'

type BlogPostProps = {
  id: string
  title: string
  image: StaticImageData
}

const BlogPost = ({ id, title, image }: BlogPostProps) => {
  return (
    <Row align="middle" className="blog-post">
      <Link href={`./blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <Image src={image} alt="Blog Image" />
      <p className="blog-post-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum ...
      </p>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button size="large" className="button" block>
          Read More
        </Button>
      </Col>
      <BlogPostFooter />
    </Row>
  )
}

export default BlogPost
