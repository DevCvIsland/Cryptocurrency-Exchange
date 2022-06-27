type TitleBannerProps = {
  // eslint-disable-next-line react/require-default-props
  firstTitle?: string
  lastTitle: string
}

const TitleBanner = ({ firstTitle, lastTitle }: TitleBannerProps) => {
  return (
    <>
      <div className="flex-row title-banner-section" />
      <div className="title-banner-container">
        <h2 className="title-banner-text">
          {firstTitle}
          <span className="theme-primary-color">{lastTitle}</span>
        </h2>
      </div>
    </>
  )
}

export default TitleBanner
