import AppLayout from './App';
import {Layout} from 'antd';
import React from "react";

const {Header, Content} = Layout;

function ExampleLayout({children}) {
  return (
    <AppLayout>
      <Header>
        Header
      </Header>
      <Content>{children}</Content>
    </AppLayout>
  );
}

export default ExampleLayout;
