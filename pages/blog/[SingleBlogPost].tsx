import { Row, Col } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import Posts from './BlogPostsData'
import BlogPostFooter from '../../components/blog-post/BlogPostFooter'
import PostComments from './PostComments'
import BlogSidebar from './BlogSidebar'

const SinglePost = () => {
  const router = useRouter()
  const { SingleBlogPost } = router.query
  const post = Posts.find((obj) => obj.id === SingleBlogPost) || Posts[0]

  return (
    <Layout>
      <TitleBanner firstTitle={post.mark} lastTitle="Post" />
      <Row justify="center" align="top">
        <Col xs={23} sm={20} md={20} lg={13} xl={12} className="single-post">
          <h3>{post.title}</h3>
          <Image src={post.img} alt="Blog Image" />
          <p className="blog-post-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            eaque quasi asperiores dicta! Excepturi, exercitationem! Quas,
            adipisci est facilis quam culpa doloremque dolore nemo iste
            reprehenderit harum maiores magni. Provident?
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            eaque quasi asperiores dicta! Excepturi, exercitationem! Quas,
            adipisci est facilis quam culpa doloremque dolore nemo iste
            reprehenderit harum maiores magni. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Facere eaque quasi asperiores dicta!
            Excepturi, exercitationem! Quas, adipisci est facilis quam culpa
            doloremque dolore nemo iste reprehenderit harum maiores magni.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            eaque quasi asperiores dicta! Excepturi, exercitationem! Quas,
            adipisci est facilis quam culpa doloremque dolore nemo iste
            reprehenderit harum maiores magni.
          </p>
          <BlogPostFooter />
          <PostComments />
        </Col>
        <Col xs={23} sm={20} md={15} lg={9} xl={6}>
          <BlogSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default SinglePost
