import React from 'react';
import moment from 'moment';
import Router from 'next/router';
import NProgress from 'nprogress';
import nextCookie from 'next-cookies';
import qs from 'qs';

import {initializeStore} from '../store';
import Auth from '../actions/Example';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

moment.locale('ru');

NProgress.configure({
  showSpinner: false,
  minimum: 0.2,
  speed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function getOrCreateStore(initialState) {
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

const init = (App) => {
  return class InitApp extends React.Component {
    static async getInitialProps(appContext) {
      appContext.ctx.query = qs.parse(appContext.ctx.query);

      const reduxStore = getOrCreateStore();
      const reduxState = reduxStore.getState();

      const {token} = nextCookie(appContext.ctx);

      appContext.ctx.reduxStore = reduxStore;
      appContext.ctx.ctx = {token};

      if (!reduxState.userState.init) {
        reduxState.userState = await Auth.getAuth(appContext.ctx.ctx);

        reduxState.userState.init = true;
      }

      appContext.ctx.userState = reduxState.userState;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      appProps.pageProps.userState = reduxState.userState;
      appProps.pageProps.query = appContext.ctx.query;

      return {
        ...appProps,
        initialReduxState: reduxState,
      };
    }



    constructor(props) {
      super(props);

      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default init;
