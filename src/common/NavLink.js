import React from 'react';
import {NavLink as NavLinkReact} from 'react-router-dom';

class NavLink extends React.PureComponent {
    renderLink = () => {
        const {pathname} = window.location;
        const {
            to,
            children
        } = this.props;
        if(pathname !== to) {
            return <NavLinkReact onClick={this.handleClick} to={to}>
                {children}
            </NavLinkReact>;
        }
        return <a className='selected'>{children}</a>;
    }
    render() {
        return this.renderLink();
    }
}

export default NavLink;
