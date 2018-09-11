import React from 'react';
import Form from '../common/Form';
import UserFormConent from './UserFormConent';

const UserAddForm = () =>
    <Form
        onClose={() => false}
        onSave={() => false}
        isEditable={true}
        title='Новый пользователь'
    >
        <div className='content'>
            <div>UserAddForm</div>
            <UserFormConent isEditable={true}/>
        </div>
    </Form>;

export default UserAddForm;
