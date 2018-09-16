import React from 'react';
import {NavLink} from 'react-router-dom';
import config from '../../config.local';

const Menu = () =>
    <div className='menu'>
        <div className='logo'>Мегафон</div>
        <div className='buttons'>
            <NavLink
                to={`${config.basename}/contacts`}
                activeClassName='selected'
            ><div className='book' title='Контакты'/></NavLink>
            <NavLink
                to={`${config.basename}/adduser`}
                activeClassName='selected'
            ><div className='adduser' title='Добавить в контакты'/></NavLink>
        </div>
    </div>;

export default Menu;
