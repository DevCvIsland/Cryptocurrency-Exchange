import Head from 'next/head'

const HeadComponent = ({ title }: any) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default HeadComponent
