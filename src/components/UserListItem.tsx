import * as React from 'react';
import {NavLink} from 'react-router-dom';
import config from '../../config.local';
import Button from '../common/Button';
import * as types from '../types';

const UserListItem: React.SFC<types.UserListItemProps> = ({user, deleteUser, history}) =>
    <div className='userlist_block'>
        <NavLink to={`${config.basename}/user/${user._id}`}>
            <div
                className='userlist_item'>
                {user.fio}
            </div>
        </NavLink>
        <div className='user_control_buttons'>
            <Button
                fontIcon='&#9998;'
                title='Редактировать'
                onClick={() => history.push(`${config.basename}/user/${user._id}/edit`)}
                classNames='edit'
            />
            <Button
                fontIcon='&#10005;'
                title='Удалить'
                onClick={() => deleteUser(user._id)}
                classNames='delete'
            />
        </div>
    </div>;

export default UserListItem;
