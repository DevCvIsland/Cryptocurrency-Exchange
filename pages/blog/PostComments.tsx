import { Row, Col, Button } from 'antd'

const CommentContainer = () => {
  return (
    <Row className="comment-container">
      <Col>image</Col>
      <Col>
        <Row>
          {/* <Col> */}
          <Row justify="space-between" align="middle">
            <Col xs={10}>name</Col>
            <Col xs={10}>date</Col>
          </Row>
          {/* </Col> */}
          <Col xs={24}>text</Col>
          <Col xs={24}>
            <Button type="link" className="theme-primary-color">
              Link Button
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const PostComments = () => {
  return (
    <>
      <h3>18 Comments</h3>
      <CommentContainer />
      <CommentContainer />
      <p>load More...</p>
    </>
  )
}

export default PostComments
