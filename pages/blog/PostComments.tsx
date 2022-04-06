import { Row, Col, Button } from 'antd'
import Image from 'next/image'
import user1 from '../../assets/person/user1.jpg'
import user2 from '../../assets/person/user2.jpg'

type CommentContainerProps = {
  img: StaticImageData
}

const CommentContainer = ({ img }: CommentContainerProps) => {
  return (
    <Row className="comment-container">
      <Col>
        <Image src={img} alt="Blog Image" className="comment-image" />
      </Col>
      <Col>
        <Row>
          {/* <Col> */}
          <Row justify="space-between" align="middle">
            <Col xs={10}>name</Col>
            <Col xs={10}>date</Col>
          </Row>
          {/* </Col> */}
          <Col xs={24}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            officiis consectetur accusantium sequi optio atque sunt mollitia
            praesentium molestiae eum ea debitis, blanditiis dolores dicta
            veritatis eius ullam. Eos, quibusdam!
          </Col>
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
      <CommentContainer img={user1} />
      <CommentContainer img={user2} />
      <p>load More...</p>
    </>
  )
}

export default PostComments
