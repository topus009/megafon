import React from 'react';
import Form from '../common/Form';
import UserFormContent from './UserFormContent';

const UserEditForm = () =>
    <Form
        onClose={() => false}
        onSave={() => false}
        isEditable={true}
        title='Иван Петрович'
    >
        <div className='content'>
            <div>UserEditForm</div>
            <UserFormContent isEditable={true}/>
        </div>
    </Form>;

export default UserEditForm;
