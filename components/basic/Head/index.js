import React from 'react';
import Head from 'next/head';
import {useSelector} from "react-redux";

function HeadCustom({children}) {
  const siteTitle = useSelector((state)=>state.settings.mainSettings.title);
  return (
    <Head>
      <link rel="icon" href="/favicon.gif" type="image/gif" />
      <div dangerouslySetInnerHTML={{__html: ''}} />
      <title>{siteTitle}</title>
      {children}
    </Head>
  );
}

export default HeadCustom;
