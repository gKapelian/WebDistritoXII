import Head from 'next/head'

import Layout from '../components/layout'
import OnePerson from '../components/1-psn'

import { CMS_NAME } from '../lib/constants'
import { getPageData } from '../lib/api'

export default function Delivery({ page }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Delivery | {CMS_NAME}</title>
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
  const page = getPageData('delivery')

  return {
    props: { page },
  }
}
