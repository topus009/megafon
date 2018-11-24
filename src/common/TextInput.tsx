import * as React from 'react';
import * as types from '../types';

const TextInput: React.SFC<types.TextInputProps> = props => {
    const {
        value,
        placeholder,
        hasError,
        onChange
    } = props;
    return (
        <div className='text_input'>
            {}

            <div className='input_block'>
                <input
                    type='text'
                    className={
                        'input ' +
                        (hasError ? 'error ' : '')
                    }
                    placeholder={placeholder || ''}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                />
                <span
                    className={
                        'validate_icon ' +
                        (hasError ? 'bad ' : 'good')
                    }
                />
            </div>
        </div>
    );
};

export default TextInput;
