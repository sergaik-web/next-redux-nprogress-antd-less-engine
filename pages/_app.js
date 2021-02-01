import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
import init from '../base/init';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

import 'antd/dist/antd.less';
import 'nprogress/nprogress.css';
import '../styles/antd.less';
import '../styles/components.less';
import '../styles/fonts.css';
import '../styles/global.less';

class CustomApp extends App {
  render() {
    const {Component, pageProps, reduxStore} = this.props;

    return (
      <ConfigProvider locale={ru_RU}>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </ConfigProvider>
    );
  }
}

export default init(CustomApp);
