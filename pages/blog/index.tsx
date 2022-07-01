import { Row, Col, Pagination } from 'antd'
import Head from '../../containers/head/Head'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import Post from './BlogPostsData'
import BlogPost from '../../components/blog-post/BlogPost'
import BlogSidebar from './BlogSidebar'

const Blog = () => {
  return (
    <>
      <Head title="Blog" />
      <Layout>
        <TitleBanner firstTitle="Blog" lastTitle="Posts" />
        <Row justify="center" align="top">
          <Col xs={23} sm={20} md={20} lg={13} xl={12}>
            <BlogPost
              id={Post[0].id}
              title={Post[0].title}
              image={Post[0].img}
            />
            <BlogPost
              id={Post[1].id}
              title={Post[1].title}
              image={Post[1].img}
            />
            <BlogPost
              id={Post[2].id}
              title={Post[2].title}
              image={Post[2].img}
            />
            <Pagination total={50} className="blog-pagination" />
          </Col>
          <Col xs={23} sm={20} md={15} lg={9} xl={6}>
            <BlogSidebar />
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default Blog
