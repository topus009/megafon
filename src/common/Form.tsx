import * as React from 'react';
import * as types from '../types';
import Button from './Button';

const Form: React.SFC<types.FormProps> = ({children, onClose, onSave, isEditable, title, disabled}) =>
    <div className='form'>
        <div className='title'>
            {title}
            {
                onClose &&
                    <Button
                        fontIcon='&#10005;'
                        title='Закрыть'
                        onClick={onClose}
                        classNames='close'
                    />
            }
        </div>
        {children}
        {
            (isEditable && onSave) &&
            <div className='footer'>
                <Button
                    title='Сохранить'
                    onClick={onSave}
                    classNames='save'
                    disabled={disabled}
                />
            </div>
        }
    </div>;

export default Form;
