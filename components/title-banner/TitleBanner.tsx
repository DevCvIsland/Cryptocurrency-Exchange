type TitleBannerProps = {
  firstTitle: string
  lastTitle: string
}

const TitleBanner = ({ firstTitle, lastTitle }: TitleBannerProps) => {
  return (
    <>
      <div className="flex-row title-banner-section" />
      <h2 className="title-banner-text">
        {firstTitle}
        <span className="theme-primary-color">{lastTitle}</span>
      </h2>
    </>
  )
}

export default TitleBanner
