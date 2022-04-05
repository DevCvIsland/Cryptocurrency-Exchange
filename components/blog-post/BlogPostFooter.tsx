import React from 'react'

const BlogPostFooter = () => {
  return (
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
        <LinkOutlined />
        <p>permalink</p>
      </Col>
      <Col>
        <TagsOutlined />
        <p>market, cryptocurrency, trading</p>
      </Col>
    </Row>
  )
}

export default BlogPostFooter
