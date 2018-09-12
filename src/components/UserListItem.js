import React from 'react';
import {NavLink} from 'react-router-dom';

const UserListItem = ({user, id}) =>
    <div className='userlist_block'>
        <NavLink to={'/user/' + id}>
            <div
                className='userlist_item'>
                {user.fio}
            </div>
        </NavLink>
        <div className='user_control_buttons'>
            <span>X1   </span>
            <span>X2</span>
        </div>
    </div>;

export default UserListItem;

