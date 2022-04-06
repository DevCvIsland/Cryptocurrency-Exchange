import { Row, Col } from 'antd'

const CommentContainer = () => {
  return (
    <Row className="comment-container">
      <Col>image</Col>
      <Col>
        <Row>
          <Row justify="space-between" align="middle">
            <Col>name</Col>
            <Col>date</Col>
          </Row>
          <Col xs={24}>text</Col>
          <Col xs={24}>button</Col>
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
