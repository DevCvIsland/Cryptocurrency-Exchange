import { Row, Col } from 'antd'

const PostComments = () => {
  return (
    <>
      <h3>18 Comments</h3>
      <Row className="comment-container">
        <Col>image</Col>
        <Col>
          <Row>
            <Row>
              <Col>name</Col>
              <Col>date</Col>
            </Row>
            <Col xs={24}>text</Col>
            <Col xs={24}>button</Col>
          </Row>
        </Col>
      </Row>
      <p>load More...</p>
    </>
  )
}

export default PostComments
