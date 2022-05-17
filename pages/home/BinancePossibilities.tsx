import { Row, Col, Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
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
    <Col xs={6} className="binance-possibilities-cards">
      {img !== Card2 && <Image src={img} alt="binance possibilities image" />}
      <div>
        <h4 className={img !== Card2 ? 'binance-possibilities-title' : ''}>
          {title}
        </h4>
        <p>{description}</p>
        <Button type="link">
          Learn more <RightOutlined />
        </Button>
      </div>
      {img === Card2 && <Image src={img} alt="binance possibilities image" />}
    </Col>
  )
}

const BinancePossibilities = () => {
  return (
    <Row justify="center" className="binance-possibilities">
      <Col xs={18}>
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
