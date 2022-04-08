import { Row, Col, Button } from 'antd'
import Image from 'next/image'
import user1 from '../../assets/person/user1.jpg'
import user2 from '../../assets/person/user2.jpg'
import admin from '../../assets/person/user-admin.jpg'

type CommentContainerProps = {
  img: StaticImageData
  name: string
  date: string
}

const CommentContainer = ({ img, name, date }: CommentContainerProps) => {
  const CommentContainerClasses = `comment-container ${
    // eslint-disable-next-line eqeqeq
    img == admin && 'admin-comment'
  }`

  return (
    <Row className={CommentContainerClasses}>
      <Col xs={4} xl={4} className="comment-image">
        <Image src={img} alt="User Image" height={105} />
      </Col>
      <Col xs={24} xl={19}>
        <Row>
          <Col xs={24} className="comment-header">
            <h4>{name}</h4>
            <p>{date}</p>
          </Col>
          <Col xs={24}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              officiis consectetur accusantium sequi optio atque sunt mollitia
              praesentium molestiae eum ea debitis, blanditiis dolores dicta
              veritatis eius ullam. Eos, quibusdam!
            </p>
          </Col>
          <Col xs={24}>
            <Button type="link" size="large" className="theme-primary-color">
              Reply
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const PostComments = () => {
  return (
    <div className="comments-section">
      <h3>18 Comments</h3>
      <CommentContainer img={user1} name="Lina Marzouki" date="July 17, 2017" />
      <CommentContainer img={admin} name="Slim Hamdi" date="July 18, 2017" />
      <CommentContainer img={user2} name="Rawia Chniti" date="March 29, 2017" />
      <Button type="link">Load More...</Button>
    </div>
  )
}

export default PostComments
