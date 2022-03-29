import { Row, Col } from 'antd'
import Image from 'next/image'
import One from '../../assets/person/member3.jpg'

type PersonContainerProps = {
  image: StaticImageData
}

const PersonContainer = ({ image }: PersonContainerProps) => {
  return (
    <Col>
      <Image src={image} alt="Bitcoin Image" width={350} height={350} />
    </Col>
  )
}

const PersonsSection = () => {
  return (
    <Row>
      <div>div</div>
      <div>
        <PersonContainer image={One} />
      </div>
    </Row>
  )
}

export default PersonsSection
