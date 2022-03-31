import { Row, Col, Divider } from 'antd'

const BlogSidebar = () => {
  return (
    <>
      <Row className="blog-sidebar-container">
        <Col>
          <h3>category</h3>
          <p>ss</p>
          <Divider className="sidebar-item-divider" />
          <p>vvv</p>
          <Divider className="sidebar-item-divider" />
          <p>vvv</p>
          <Divider className="sidebar-item-divider" />
          <p>ss</p>
        </Col>
      </Row>
      <Row className="blog-sidebar-container">
        <Col>two sidebar</Col>
      </Row>
      <Row className="blog-sidebar-container">
        <Col>three sidebar</Col>
      </Row>
      <Row className="blog-sidebar-container">
        <Col>four sidebar</Col>
      </Row>
    </>
  )
}

export default BlogSidebar
