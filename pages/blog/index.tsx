import { Row, Col, Pagination } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import BlogSidebar from './BlogSidebar'
import BlogPost from '../../components/blog-post/BlogPost'

const Blog = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Blog" lastTitle="Posts" />
      <Row justify="center" align="top" className="contact-section">
        <Col xs={23} sm={20} md={20} lg={13} xl={12}>
          <BlogPost />
          <BlogPost />
          <Pagination total={50} className="blog-pagination" />
        </Col>
        <Col xs={23} sm={20} md={15} lg={9} xl={6}>
          <BlogSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default Blog
