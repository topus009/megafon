import React, {Component} from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            isError: false
        };
    }

    componentDidMount() {
        const {value, required, checkError, setError} = this.props;
        if(required && checkError(value)) {
            this.setState({isError: true});
            setError(true);
        }
    }
    renderValidateIcon = () => {
        const {value} = this.props;
        const {isError} = this.state;
        if(value.length && !isError) return 'good';
        if(isError) return 'bad';
        return '';
    }
    handleChange = e => {
        const {value} = e.target;
        const {onChange, needValidate} = this.props;
        onChange(value);
        if(needValidate) this.validateInput(value);
    }
    validateInput = value => {
        const {checkError, required, setError} = this.props;
        let error = false;
        if(!value.length) {
            error = false;
        } else if(checkError(value)) {
            error = true;
        } else error = false;
        if(checkError(value) && required) {
            error = true;
        }
        this.setState({isError: error});
        setError(error);
    }
    handleFocus = () => {
        this.setState({isFocused: true});
    }
    handleBlur = () => {
        this.setState({isFocused: false});
    }

    render() {
        const {label, value, placeholder} = this.props;
        const {isFocused, isError} = this.state;
        return (
            <div className='text_input'>
                <div className={'label ' + isFocused ? ' focused' : ''}>{label}</div>
                <div className='input_block'>
                    <input
                        type='text'
                        className={
                            'input ' +
                            (isFocused ? 'focused ' : '') +
                            (isError ? 'error ' : '')
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
