import Head from 'next/head'

import Layout from '../components/layout'
import OnePerson from '../components/1-psn'
import { getPageData, } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function ValuesPage({page}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Sustentabilidad | {CMS_NAME}</title>
        </Head>
        <OnePerson 
          heading={page.heading}
          description={page.description}
          blurbs={[]}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('sustentabilidad')

  return {
    props: { page },
  }
}
