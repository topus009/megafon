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
            <span>
                <NavLink to={`/user/${id}/edit`}>
                    <div>Edit</div>
                </NavLink>
            </span>
            <span>Delete</span>
        </div>
    </div>;

export default UserListItem;

