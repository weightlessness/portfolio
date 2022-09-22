import * as React from "react"
import Head from "next/head"
import { Descriptions, Titles } from "../constants/titlesAndDescriptions"
import PageDesigners from "../components/PageDesigners"
import getTitleOrDescription from "../utils/getTitleOrDescription"

const Home = (response: string): JSX.Element => {
  console.log(response)

  const seo_title = "0" 
  const seo_description = "0"

  const title = getTitleOrDescription(seo_title, Titles.main)
  const description = getTitleOrDescription(seo_description, Descriptions.main)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={"description"} content={description} />
        <meta name='robots' content='index, follow' />
      </Head>

      <PageDesigners />
    </>
  )
}
Home.getInitialProps = async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => resolve('Imitates data fetching for SSR'), 100);
  })
  return { response }
}

export default Home
