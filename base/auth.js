import {Component} from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

// Gets the display name of a JSX component for dev tools
const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';

export const withAuth = (WrappedComponent) =>
  class extends Component {
    static displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const userContracts = ctx.userContracts;
      const {token} = nextCookie(ctx);

      if (ctx.req && (!token || !userContracts)) {
        ctx.res.writeHead(302, {Location: `/auth/login?back=${ctx.req.url}`});
        ctx.res.end();
        return;
      }

      if (!token || !userContracts) {
        await Router.push(`/auth/login?back=${ctx.asPath || ctx.pathname}`);
        return {};
      }

      const componentProps =
        WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

      return {...componentProps, token};
    }

    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    componentDidMount() {
      window && window.addEventListener('storage', this.syncLogout);
    }

    componentWillUnmount() {
      window && window.removeEventListener('storage', this.syncLogout);
      window && window.localStorage.removeItem('logout');
    }

    syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        Router.push('/');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export const withAnon = (WrappedComponent) =>
  class extends Component {
    static displayName = `withAnon(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const {userState} = ctx.reduxStore.getState();
      const {token} = nextCookie(ctx);

      if (userState.company && token) {
        if (ctx.req) {
          ctx.res.writeHead(302, {Location: '/'});
          ctx.res.end();
          return;
        }

        Router.push('/');
        return {};
      }

      const componentProps =
        WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

      return {...componentProps};
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
