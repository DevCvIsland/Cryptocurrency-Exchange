type TitleLayoutProps = {
  title: string
}

const TitleLayout = ({ title }: TitleLayoutProps) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default TitleLayout
