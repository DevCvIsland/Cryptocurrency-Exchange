import { Row, Col } from 'antd'
import Image from 'next/image'
import Card1 from '../../assets/possibility-card/possibility-card-1.png'
import Card2 from '../../assets/possibility-card/possibility-card-2.png'
import Card3 from '../../assets/possibility-card/possibility-card-3.png'

type BinancePossibilitiesCardsProps = {
  title: string
  description: string
  img: StaticImageData
}

const BinancePossibilitiesCards = ({
  title,
  description,
  img,
}: BinancePossibilitiesCardsProps) => {
  return (
    <Col>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>button</p>
      <Image src={img} alt="started img" />
    </Col>
  )
}

const BinancePossibilities = () => {
  return (
    <Row>
      <Col xs={24}>
        <h3>Explore endless possibilities with Binance</h3>
      </Col>
      <BinancePossibilitiesCards
        title="Dive into the world of NFTs"
        description="Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Binance NFT."
        img={Card1}
      />
      <BinancePossibilitiesCards
        title="Grow your business with Binance Pay"
        description="Reach more customers as you pay and get paid in crypto with our borderless payment technology on Binance Pay & Binance Marketplace."
        img={Card2}
      />
      <BinancePossibilitiesCards
        title="Binance Earn"
        description="Hold your crypto funds and start earning."
        img={Card3}
      />
    </Row>
  )
}

export default BinancePossibilities
