import React from 'react';

class TextInput extends React.PureComponent {
    handleChange = e => {
        const {fieldName, onChange} = this.props;
        onChange({key: fieldName, value: e.target.value});
    }
    render() {
        const {
            label,
            value,
            placeholder,
            hasError
        } = this.props;
        return (
            <div className='text_input'>
                <div className='label'>{label}</div>
                <div className='input_block'>
                    <input
                        type='text'
                        className={
                            'input ' +
                            (hasError ? 'error ' : '')
                        }
                        placeholder={placeholder}
                        value={value}
                        onChange={this.handleChange}
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
    }
}

export default TextInput;
