import React from 'react';
import {Layout} from 'antd';
import {withRouter} from 'next/router';
import HeadCustom from "../basic/Head";

function AppLayout({children, wrapperClassName}) {
  return (
    <>
      <HeadCustom/>
      <main className={`AppMain ${wrapperClassName || ''}`}>
        <Layout >{children}</Layout>
      </main>
    </>
  );
}

export default withRouter(AppLayout);
