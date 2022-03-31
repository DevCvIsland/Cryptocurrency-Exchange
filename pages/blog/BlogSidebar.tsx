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
  buttons?: string[]
}

const SidebarItemContainer = ({
  title,
  items,
  buttons,
}: SidebarItemContainerProps) => {
  return (
    <Row className="sidebar-item-container">
      <Col xs={24}>
        <h3>{title}</h3>
        {buttons && (
          <>
            {buttons.map((button) => (
              <Button key={button} size="large" className="button-outline">
                {button}
              </Button>
            ))}
          </>
        )}
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
      <Row className="sidebar-item-container">
        <h3>Recent Posts</h3>
        <Divider className="sidebar-item-divider" />
        <Col xs={24} className="flex-row">
          <Image src={RecentPost1} alt="blog-post" width={100} height={100} />
          <div>
            <h3>Risks & Rewards Of Investing In Bitcoin </h3>
            <p>January 19, 2018</p>
          </div>
        </Col>
        <Divider className="sidebar-item-divider" />
        <Col xs={24} className="flex-row">
          <Image src={RecentPost2} alt="blog-post" width={100} height={100} />
          <div>
            <h3>Cryptocurrency - Who Are Involved With It? </h3>
            <p>August 03, 2017</p>
          </div>
        </Col>
        <Divider className="sidebar-item-divider" />
        <Col xs={24} className="flex-row">
          <Image src={RecentPost3} alt="blog-post" width={100} height={100} />
          <div>
            <h3>How Cryptocurrency Begun and Its Impact</h3>
            <p>March 27, 2017</p>
          </div>
        </Col>
      </Row>
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
