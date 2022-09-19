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
          <title>Acerca de nosotros | {CMS_NAME}</title>
        </Head>
        <OnePerson 
          heading={page.members.heading}
          description={page.members.description}
          blurbs={[]}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('acerca')

  return {
    props: { page },
  }
}
