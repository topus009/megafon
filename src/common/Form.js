import React from 'react';
import Button from './Button';

const Form = ({children, onClose, onSave, isEditable, title}) =>
    <div className='form'>
        <div className='title'>
            {title}
            <Button
                fontIcon='&#10006;'
                title='Закрыть'
                onClick={onClose}
                classNames='close'
            />
        </div>
        {children}
        {
            isEditable &&
            <div className='footer'>
                <Button
                    title='Сохранить'
                    onClick={onSave}
                    classNames='save'
                />
            </div>
        }
    </div>;

export default Form;
