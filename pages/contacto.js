import Head from 'next/head'

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import ShortText from '../components/short-text'
import TwoUpButton from '../components/2-up-button'
import Redes from '../components/redes'
import TwoUpNoButton from '../components/2-up-no-button'

import { getPageData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Contacto({ page }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Contacto | {CMS_NAME}</title>
        </Head>
        <ShortText 
          heading={page.heading}
          text=""
        />
        <Redes 
          heading={page.red.heading}
          description={page.red.description}
          redes={page.red.redes}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = getPageData('contacto')

  return {
    props: { page },
  }
}
