import React, {Component} from 'react';
import _ from 'lodash';
import TextInput from '../common/TextInput';
import {hasOnlyDigits, yearIsLessThanCurrent, isNotEmpty} from '../helpers';

const contentProps = {
    fio: {
        label: 'ФИО',
        needValidate: true,
        required: true,
        invalid: value => !isNotEmpty(value)
    },
    mainPhone: {
        label: 'Основной номер',
        needValidate: true,
        invalid: value => !hasOnlyDigits(value)
    },
    workPhone: {
        label: 'Рабочий номер',
        needValidate: true,
        invalid: value => !hasOnlyDigits(value)
    },
    email: {
        label: 'Email'
    },
    dateOfBirth: {
        label: 'Дата рождения',
        needValidate: true,
        placeholder: '2000.01.01',
        invalid: value => !yearIsLessThanCurrent(value)
    },
    address: {
        label: 'Адрес'
    },
    vk: {
        label: 'Вконтакте'
    },
    comments: {
        label: 'Комментарии'
    }
};

class UserFormContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fio: '',
                mainPhone: '',
                workPhone: '',
                email: '',
                dateOfBirth: '',
                address: '',
                vk: '',
                comments: ''
            },
            errors: {
                fio: false,
                mainPhone: false,
                workPhone: false,
                email: false,
                dateOfBirth: false,
                address: false,
                vk: false,
                comments: false
            }
        };
    }
    componentDidMount() {
        const {userData} = this.props;
        if(userData) {
            this.setState({user: userData});
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const prevUser = prevState.user;
        const {user, errors} = this.state;
        const {saveUserToStore, setErrors} = this.props;
        if(!_.isEqual(prevUser, user)) {
            saveUserToStore(user);
        }
        setErrors(errors);
    }
    onChange(key, value) {
        this.setState(({user}) => ({
            user: {
                ...user,
                [key]: value
            }
        }));
    }
    setError(key, value) {
        this.setState(({errors}) => ({
            errors: {
                ...errors,
                [key]: value
            }
        }));
    }
    render() {
        const {isEditable} = this.props;
        const {user} = this.state;
        return (
            <div className='user_form'>
                {
                    isEditable ?
                        _.map(user, (item, key) => {
                            if(contentProps[key]) {
                                return (
                                    <TextInput
                                        key={key}
                                        value={item}
                                        label={contentProps[key].label}
                                        placeholder={contentProps[key].placeholder}
                                        onChange={value => this.onChange(key, value)}
                                        setError={value => this.setError(key, value)}
                                        checkError={contentProps[key].invalid}
                                        needValidate={contentProps[key].needValidate}
                                        required={contentProps[key].required}
                                    />
                                );
                            }
                        }) :
                        _.map(user, (item, key) => {
                            if(contentProps[key]) {
                                return (
                                    <div key={key}>
                                        <div>{contentProps[key].label}</div>
                                        <div>{item}</div>
                                    </div>
                                );
                            }
                        })
                }
            </div>
        );
    }
}

export default UserFormContent;
