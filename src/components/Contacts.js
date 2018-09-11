import React from 'react';
import Form from '../common/Form';

const Contacts = () =>
    <Form
        onClose={() => false}
        onSave={() => false}
        isEditable={true}
        title='Контакты'
    >
        <div className='content'>
            <div style={{width: '100%', height: '1000px'}}>Contacts</div>
        </div>
    </Form>;

export default Contacts;

