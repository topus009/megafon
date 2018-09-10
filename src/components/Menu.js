import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () =>
    <div className='menu'>
        <div className='logo'>Мегафон</div>
        <div className='buttons'>
            <NavLink
                to='/contacts'
                activeClassName='selected'
            ><div className='book' title='Контакты'/></NavLink>
            <NavLink
                to='/adduser'
                activeClassName='selected'
            ><div className='adduser' title='Добавить в контакты'/></NavLink>
        </div>
    </div>;

export default Menu;
