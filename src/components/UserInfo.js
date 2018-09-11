import React from 'react';
import Form from '../common/Form';
import UserFormConent from './UserFormConent';

const UserInfo = () =>
    <Form
        onClose={() => false}
        isEditable={false}
        title='Иван Петрович'
    >
        <div className='content'>
            <div>UserInfo</div>
            <UserFormConent isEditable={false}/>
        </div>
    </Form>;

export default UserInfo;
