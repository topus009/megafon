import React, {Component} from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            isError: false
        };
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.setError(nextState.isError);
    }

    renderValidateIcon() {
        const {value} = this.props;
        const {isError} = this.props;
        if(value.length & !isError) return '&#10003;';
        if(isError) return '&#10006;';
        return null;
    }
    handleChange(e) {
        const {value} = e.target;
        const {onChange, needValidate} = this.props;
        onChange(value);
        if(needValidate) this.validateInput(value);
    }
    validateInput(value) {
        const {checkError} = this.props;

        if(checkError(value)) {
            this.setState({isError: true});
        } else this.setState({isError: false});
    }
    handleFocus() {
        this.setState({isFocused: true});
    }
    handleBlur() {
        this.setState({isFocused: false});
    }

    render() {
        const {label, value} = this.props;
        const {isFocused, isError} = this.props;
        return (
            <div className='text_input'>
                <div className={'label ' + isFocused ? ' focused' : ''}>{label}</div>
                <div className='input'>
                    <input
                        type='text'
                        className={
                            'input ' +
                            (isFocused ? 'focused ' : '') +
                            (isError ? 'error ' : '')
                        }
                        value={value}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    <span className='validate_icon'>
                        {this.renderValidateIcon()}
                    </span>
                </div>
            </div>

        );
    }
}

export default TextInput;
