import React from 'react';
import Form from '../common/Form';
import UserFormContent from './UserFormContent';

const UserInfo = () =>
    <Form
        onClose={() => false}
        isEditable={false}
        title='Иван Петрович'
    >
        <div className='content'>
            <div>UserInfo</div>
            <UserFormContent isEditable={false}/>
        </div>
    </Form>;

export default UserInfo;
