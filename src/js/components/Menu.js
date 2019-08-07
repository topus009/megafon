import React from 'react';
import NavLink from '../common/NavLink';

const navItems = [
  {
    path: '/contacts',
    btnClassName: 'book',
    title: 'Контакты',
  },
  {
    path: '/adduser',
    btnClassName: 'adduser',
    title: 'Добавить в контакты',
  },
];

const Menu = () => {
  const renderNavLinks = () =>
    navItems.map(({ path, btnClassName, title }, index) => (
      <NavLink key={index} to={path}>
        <div className={btnClassName} title={title} />
      </NavLink>
    ));
  return (
    <div className="menu">
      <div className="logo">Мегафон</div>
      <div className="buttons">{renderNavLinks()}</div>
    </div>
  );
};

export default Menu;
