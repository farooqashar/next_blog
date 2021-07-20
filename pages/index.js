import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout.js'
import siteTitle from '../components/title.js'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

export default function Home({ postsData }) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
      </Head>
    <Layout home = {true}>
      <section className={utilStyles.headingMd}>
        <h1>Hi! I am Ashar! Welcome to my blog!</h1>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
    </>
  )
}

export async function getStaticProps() {

  const postsData = getSortedPostsData()

  return {
    props: {
      postsData
    }
  }
}
