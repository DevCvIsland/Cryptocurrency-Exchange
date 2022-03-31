import { Row, Col, Divider, Button } from 'antd'
import Image from 'next/image'
import RecentPost1 from '../../assets/blog/blog-post-small-1.jpg'
import RecentPost2 from '../../assets/blog/blog-post-small-2.jpg'
import RecentPost3 from '../../assets/blog/blog-post-small-3.jpg'

type SidebarItemContainerProps = {
  title: string
  // eslint-disable-next-line react/require-default-props
  items?: string[]
  // eslint-disable-next-line react/require-default-props
  posts?: {
    image: StaticImageData
    text: string
    time: string
  }[]
  // eslint-disable-next-line react/require-default-props
  buttons?: string[]
}

const SidebarItemContainer = ({
  title,
  items,
  posts,
  buttons,
}: SidebarItemContainerProps) => {
  return (
    <Row className="sidebar-item-container">
      <Col xs={24}>
        <h3>{title}</h3>
        {items && (
          <>
            {items.map((item) => (
              <>
                <Divider className="sidebar-item-divider" />
                <p>{item}</p>
              </>
            ))}
          </>
        )}
        {posts && (
          <>
            {posts.map((post) => (
              <>
                <Divider className="sidebar-item-divider" />
                <Col xs={24} className="flex-row">
                  <Image
                    src={post.image}
                    alt="blog-post"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3>{post.text}</h3>
                    <p>{post.time}</p>
                  </div>
                </Col>
              </>
            ))}
          </>
        )}
        {buttons && (
          <>
            {buttons.map((button) => (
              <Button key={button} size="large" className="button-outline">
                {button}
              </Button>
            ))}
          </>
        )}
      </Col>
    </Row>
  )
}

const BlogSidebar = () => {
  return (
    <>
      <SidebarItemContainer
        title="Categories"
        items={['Insurance', 'Announcement', 'Banking', 'Security', 'Market']}
      />
      <SidebarItemContainer
        title="Archives"
        items={['March  2021', 'December 2020', 'April 2019', 'September 2018']}
      />
      <SidebarItemContainer
        title="Recent Posts"
        posts={[
          {
            image: RecentPost1,
            text: 'Risks & Rewards Of Investing In Bitcoin',
            time: 'January 19, 2018',
          },
          {
            image: RecentPost2,
            text: 'Cryptocurrency - Who Are Involved With It?',
            time: 'August 03, 2017',
          },
          {
            image: RecentPost3,
            text: 'How Cryptocurrency Begun and Its Impact',
            time: 'March 27, 2017',
          },
        ]}
      />
      <SidebarItemContainer
        title="Popular Tags"
        buttons={[
          'Currency',
          'Crypto',
          'Trading',
          'Wallet',
          'Mining',
          'Transaction',
          'Financial',
          'Security',
        ]}
      />
    </>
  )
}

export default BlogSidebar
