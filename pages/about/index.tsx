import Head from '../../containers/head/Head'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import DescriptionSection from './DescriptionSection'
import StatusSection from './StatusSection'
import PersonsSection from './PersonsSection'

const About = () => {
  return (
    <>
      <Head title="About" />
      <Layout>
        <TitleBanner firstTitle="About" lastTitle="Us" />
        <DescriptionSection />
        <StatusSection />
        <PersonsSection />
      </Layout>
    </>
  )
}

export default About
