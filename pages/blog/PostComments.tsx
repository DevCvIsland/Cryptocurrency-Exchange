import { Row, Col } from 'antd'

const PostComments = () => {
  return (
    <>
      <h3>18 Comments</h3>
      <Row>
        <Col>image</Col>
        <Col>
          <Row>
            <Row>
              <Col>name</Col>
              <Col>date</Col>
            </Row>
            <Col>text</Col>
            <Col>button</Col>
          </Row>
        </Col>
      </Row>
      <p>load More...</p>
    </>
  )
}

export default PostComments
