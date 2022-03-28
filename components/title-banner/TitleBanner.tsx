import Image from 'next/image'
import Background from '../../assets/root/bg-banner.jpg'

type TitleBannerProps = {
  title: string
}

const TitleBanner = ({ title }: TitleBannerProps) => {
  return (
    <div>
      <Image src={Background} alt="Background" width={1550} height={200} />
      <h2>{title}</h2>
    </div>
  )
}

export default TitleBanner
