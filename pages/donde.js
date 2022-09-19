import Head from 'next/head'

import Layout from '../components/layout'
import AddressMap from '../components/addressMap'

import { CMS_NAME } from '../lib/constants'
import { getPageData } from '../lib/api'
import ShortText from '../components/short-text'

export default function Donde({ page }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Donde | {CMS_NAME}</title>
        </Head>
        <ShortText 
          heading={page.heading}
          text={page.description}
        />
        <AddressMap/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('donde')

  return {
    props: { page },
  }
}
