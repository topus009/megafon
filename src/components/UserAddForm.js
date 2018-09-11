import React from 'react';
import {inject, observer} from 'mobx-react';
import Form from '../common/Form';
import UserFormContent from './UserFormContent';

const UserAddForm = () =>
    <Form
        onClose={() => false}
        onSave={() => false}
        isEditable={true}
        title='Новый пользователь'
    >
        <div className='content'>
            <div>UserAddForm</div>
            <UserFormContent
                isEditable={true}
            />
        </div>
    </Form>;

export default inject('store')(observer(UserAddForm));
