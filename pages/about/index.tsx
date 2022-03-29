import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import DescriptionSection from './DescriptionSection'
import PersonsSection from './PersonsSection'

const About = () => {
  return (
    <Layout>
      <TitleBanner firstTitle="About" lastTitle="Us" />
      <DescriptionSection />
      <PersonsSection />
    </Layout>
  )
}

export default About
