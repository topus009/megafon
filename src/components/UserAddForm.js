import React from 'react';
import {inject, observer} from 'mobx-react';
import Form from '../common/Form';
import UserFormContent from './UserFormContent';

const UserAddForm = ({store: {saveUser, saveUserToStore}}) =>
    <Form
        onClose={() => false}
        onSave={() => saveUser(true)}
        isEditable={true}
        title='Новый пользователь'
    >
        <div className='content'>
            <div>UserAddForm</div>
            <UserFormContent
                isEditable={true}
                saveUserToStore={saveUserToStore}
            />
        </div>
    </Form>;

export default inject('store')(observer(UserAddForm));

