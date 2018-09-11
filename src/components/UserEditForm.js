import React from 'react';
import Form from '../common/Form';
import UserFormConent from './UserFormConent';

const UserEditForm = () =>
    <Form
        onClose={() => false}
        isEditable={true}
        title='Иван Петрович'
    >
        <div className='content'>
            <div>UserEditForm</div>
            <UserFormConent isEditable={true}/>
        </div>
    </Form>;

export default UserEditForm;
