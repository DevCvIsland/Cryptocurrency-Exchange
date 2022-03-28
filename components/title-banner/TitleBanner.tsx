// import Image from 'next/image'
// import { Row } from 'antd'

type TitleBannerProps = {
  firstTitle: string
  lastTitle: string
}

const TitleBanner = ({ firstTitle, lastTitle }: TitleBannerProps) => {
  return (
    <div className="flex-row title-banner-section">
      {/* <Image src={Background} alt="Background" width={1550} height={200} /> */}
      <h2 className="title-banner-text">
        {firstTitle}
        <span className="theme-primary-color">{lastTitle}</span>
      </h2>
    </div>
  )
}

export default TitleBanner
