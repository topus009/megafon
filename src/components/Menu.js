import React from 'react';
import NavLink from '../common/NavLink';

const navLinks = {
  contacts: '/contacts',
  adduser: '/adduser',
};

const Menu = () => (
  <div className="menu">
    <div className="logo">Мегафон</div>
    <div className="buttons">
      <NavLink to={navLinks.contacts}>
        <div className="book" title="Контакты" />
      </NavLink>
      <NavLink to={navLinks.adduser}>
        <div className="adduser" title="Добавить в контакты" />
      </NavLink>
    </div>
  </div>
);

export default Menu;
