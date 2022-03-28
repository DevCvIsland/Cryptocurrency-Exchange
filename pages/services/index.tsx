import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'

const ServiceContainer = () => {
  return <div>hello</div>
}

const Services = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="Our" lastTitle="Services" />
      <ServiceContainer />
    </Layout>
  )
}

export default Services
