import React from 'react';
import { NavLink as NavLinkReact } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const { pathname } = window.location;

  if (pathname !== to) {
    return (
      <NavLinkReact to={to} activeClassName="selected">
        {children}
      </NavLinkReact>
    );
  }
  return <a className="selected">{children}</a>;
};

export default NavLink;
