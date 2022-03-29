import { Row, Col } from 'antd'
import Image from 'next/image'
import MemberOne from '../../assets/person/member1.jpg'
import MemberTwo from '../../assets/person/member2.jpg'
import MemberThree from '../../assets/person/member3.jpg'
import MemberFour from '../../assets/person/member4.jpg'

type PersonContainerProps = {
  image: StaticImageData
  name: string
  direction: string
}

const PersonContainer = ({ image, name, direction }: PersonContainerProps) => {
  return (
    <Col
      xs={24}
      sm={15}
      md={12}
      lg={12}
      xl={5}
      className="flex-column person-container"
    >
      <Image src={image} alt="Bitcoin Image" width={265} height={330} />
      <h3>{name}</h3>
      <p>{direction}</p>
    </Col>
  )
}

const PersonsSection = () => {
  return (
    <>
      <Row className="flex-column">
        <h2>Our Experts</h2>
        <p>A talented team of Cryptocurrency experts based in London</p>
      </Row>
      <Row justify="center" align="middle" className="person-section">
        <PersonContainer
          image={MemberOne}
          name="Maryana Mori"
          direction="Director"
        />
        <PersonContainer
          image={MemberTwo}
          name="Marco Verratti"
          direction="CEO"
        />
        <PersonContainer
          image={MemberThree}
          name="Emilia Bella"
          direction="Bitcoin Consultant"
        />
        <PersonContainer
          image={MemberFour}
          name="Antonio Conte"
          direction="Bitcoin Developer"
        />
      </Row>
    </>
  )
}

export default PersonsSection