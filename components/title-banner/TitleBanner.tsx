// import Image from 'next/image'
// import { Row } from 'antd'

type TitleBannerProps = {
  title: string
}

const TitleBanner = ({ title }: TitleBannerProps) => {
  return (
    <div className="title-banner-section">
      {/* <Image src={Background} alt="Background" width={1550} height={200} /> */}
      <h2>{title}</h2>
    </div>
  )
}

export default TitleBanner
