import { Row, Col, Pagination } from 'antd'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import BlogSidebar from './BlogSidebar'
import BlogPost from '../../components/blog-post/BlogPost'
import PostImage1 from '../../assets/blog/blog-post-1.jpg'
import PostImage2 from '../../assets/blog/blog-post-2.jpg'
import PostImage3 from '../../assets/blog/blog-post-3.jpg'

const Blog = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Blog" lastTitle="Posts" />
      <Row justify="center" align="top">
        <Col xs={23} sm={20} md={20} lg={13} xl={12}>
          <BlogPost
            id="first-post"
            title="How Cryptocurrency Begun and Its Impact To Financial Transactions"
            image={PostImage1}
          />
          <BlogPost
            id="second-post"
            title="Cryptocurrency - Who Are Involved With It? Words about members"
            image={PostImage2}
          />
          <BlogPost
            id="third-post"
            title="Risks & Rewards Of Investing In Bitcoin. Pros and Cons"
            image={PostImage3}
          />
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
