import React, {Component} from 'react';

class TextInput extends Component {
    componentDidMount() {
        const {value} = this.props;
        this.validateInput(value);
    }
    renderValidateIcon = () => {
        const {hasError} = this.props;
        if(!hasError) return 'good';
        return 'bad';
    }
    handleChange = e => {
        const {value} = e.target;
        const {onChange, needValidate} = this.props;
        onChange(value);
        if(needValidate) {
            this.validateInput(value);
        }
    }
    validateInput = value => {
        const {checkError, required, setError} = this.props;
        let error = false;
        if(!value.length) {
            error = false;
        } else if(checkError && checkError(value)) {
            error = true;
        } else error = false;
        if(checkError && checkError(value) && required) {
            error = true;
        }
        setError(error);
    }
    render() {
        const {label, value, placeholder, hasError} = this.props;
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
                        placeholder={placeholder || ''}
                        value={value}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    <span className={'validate_icon ' + this.renderValidateIcon()}/>
                </div>
            </div>

        );
    }
}

export default TextInput;
