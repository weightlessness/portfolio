import * as React from "react";
import Head from "next/head";
import PageDesigners from "../components/PageDesigners";
import {Descriptions, Titles} from "../constants/titlesAndDescriptions";
import getTitleOrDescription from "../utils/getTitleOrDescription";


const DesignersHookRoute = () => {

  const seo_title = '0';
  const seo_description = '0';
  const title = getTitleOrDescription(seo_title, Titles.sotrudnichestvo)
  const description =  getTitleOrDescription(seo_description, Descriptions.sotrudnichestvo)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description}/>
        <meta name="robots" content="index, follow" />
      </Head>

      <PageDesigners />
    </>
  );
};


export default DesignersHookRoute
