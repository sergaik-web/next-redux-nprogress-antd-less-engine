import React from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';

function LinkCustom({
  children,
  router,
  href,
  disabled,
  className = '',
  activeClassName = false,
  ...props
}) {
  // let defaultProps = {
  // 	className: '',
  // 	activeClassName: false,
  // };

  const active = router.pathname === href || router.asPath.split('?')[0] === href;

  const child = React.cloneElement(children, {
    className: `${className} ${active ? activeClassName || 'active' : ''}`,
  });
  return !disabled ? (
    <Link href={href} {...props}>
      {child}
    </Link>
  ) : (
    <React.Fragment>{child}</React.Fragment>
  );
}

export default withRouter(LinkCustom);
