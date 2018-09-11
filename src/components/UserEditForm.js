import React from 'react';
import Form from '../common/Form';

const UserEditForm = () =>
    <Form
        onClose={() => false}
        isEditable={false}
        title='Иван Петрович'
    >
        <div className='content'>
            <div style={{width: '100%', height: '1000px'}}>UserEditForm</div>
        </div>
    </Form>;

export default UserEditForm;
