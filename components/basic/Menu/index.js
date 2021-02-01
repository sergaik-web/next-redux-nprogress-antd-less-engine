import React from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';
import {Menu} from 'antd';

function BoxMenu({items, router, menuProps}) {
  const menuKeys = router.pathname.split('/');

  return (
    <Menu
      mode="horizontal"
      {...menuProps}
      defaultOpenKeys={menuKeys}
      defaultSelectedKeys={[router.pathname]}
    >
      {items.map((item) => (
        <Menu.Item key={item.href}>
          <Link href={item.href}>
            <a>
              {item.title}
              {item.extra ? <span className="count">{item.extra}</span> : null}
            </a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default withRouter(BoxMenu);
