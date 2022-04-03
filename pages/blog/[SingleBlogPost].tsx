import { Row, Col } from 'antd'
import Image from 'next/image'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import BlogSidebar from './BlogSidebar'
import image from '../../assets/blog/blog-post-1.jpg'

const SingleBlogPost = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Blog" lastTitle="Posts" />
      <Row justify="center" align="top">
        <Col xs={23} sm={20} md={20} lg={13} xl={12}>
          <Image src={image} alt="Blog Image" />
          <p className="blog-post-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            eaque quasi asperiores dicta! Excepturi, exercitationem! Quas,
            adipisci est facilis quam culpa doloremque dolore nemo iste
            reprehenderit harum maiores magni. Provident?
            <br style={{ marginBottom: '20px' }} />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            eaque quasi asperiores dicta! Excepturi, exercitationem! Quas,
            adipisci est facilis quam culpa doloremque dolore nemo iste
            reprehenderit harum maiores magni. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Facere eaque quasi asperiores dicta!
            Excepturi, exercitationem! Quas, adipisci est facilis quam culpa
            doloremque dolore nemo iste reprehenderit harum maiores magni.
            <br style={{ marginBottom: '20px' }} />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            eaque quasi asperiores dicta! Excepturi, exercitationem! Quas,
            adipisci est facilis quam culpa doloremque dolore nemo iste
            reprehenderit harum maiores magni.
          </p>
        </Col>
        <Col xs={23} sm={20} md={15} lg={9} xl={6}>
          <BlogSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default SingleBlogPost
