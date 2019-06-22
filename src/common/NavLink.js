import React from 'react';
import { NavLink as NavLinkReact } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const { pathname } = window.location;

  if (pathname !== to) {
    //   <NavLinkReact onClick={this.handleClick} to={to}>
    return <NavLinkReact to={to}>{children}</NavLinkReact>;
  }
  return <a className="selected">{children}</a>;
};

export default NavLink;
