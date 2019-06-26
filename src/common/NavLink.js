import React from 'react';
import { NavLink as NavLinkReact } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <NavLinkReact to={to} activeClassName="selected">
    {children}
  </NavLinkReact>
);

export default NavLink;
