type TitleBannerProps = {
  title: string
}

const TitleBanner = ({ title }: TitleBannerProps) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default TitleBanner
