import React from 'react';
import Form from '../common/Form';

const UserAddForm = () =>
    <Form
        onClose={() => false}
        onSave={() => false}
        isEditable={true}
        title='Новый пользователь'
    >
        <div className='content'>
            <div style={{width: '100%', height: '1000px'}}>UserAddForm</div>
        </div>
    </Form>;

export default UserAddForm;
