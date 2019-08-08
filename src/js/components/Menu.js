import React from 'react';
import { injectIntl } from 'react-intl';
import NavLink from '../common/NavLink';
import { iFMessage, FMessage } from '../hoc/IntlComponents';

const navItems = [
  {
    path: '/contacts',
    btnClassName: 'book',
    title: 'menu.nav.contacts',
  },
  {
    path: '/adduser',
    btnClassName: 'adduser',
    title: 'menu.nav.add',
  },
];

const Menu = ({ intl }) => {
  const renderNavLinks = () =>
    navItems.map(({ path, btnClassName, title }, index) => (
      <NavLink key={index} to={path}>
        <div className={btnClassName} title={iFMessage({ intl, id: title })} />
      </NavLink>
    ));
  return (
    <div className="menu">
      <div className="logo">
        <FMessage id="menu.brand" />
      </div>
      <div className="buttons">{renderNavLinks()}</div>
    </div>
  );
};

export default injectIntl(Menu);
