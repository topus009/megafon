import React, {Component} from 'react';
import _ from 'lodash';
import TextInput from '../common/TextInput';
import InfoField from '../common/InfoField';
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
                fio: _.get(this.props, 'userData.fio') || '',
                mainPhone: _.get(this.props, 'userData.mainPhone') || '',
                workPhone: _.get(this.props, 'userData.workPhone') || '',
                email: _.get(this.props, 'userData.email') || '',
                dateOfBirth: _.get(this.props, 'userData.dateOfBirth') || '',
                address: _.get(this.props, 'userData.address') || '',
                vk: _.get(this.props, 'userData.vk') || '',
                comments: _.get(this.props, 'userData.comments') || ''
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
        const {user, errors} = this.state;
        return (
            <div className='user_form'>
                {
                    isEditable ?
                        _.map(user, (item, key) => {
                            if(contentProps[key]) {
                                return (
                                    <InfoField
                                        label={contentProps[key].label}
                                        key={key}
                                        hideWrapper
                                    >
                                        <TextInput
                                            value={item}
                                            placeholder={contentProps[key].placeholder}
                                            onChange={value => this.onChange(key, value)}
                                            setError={value => this.setError(key, value)}
                                            hasError={errors[key]}
                                            checkError={contentProps[key].invalid}
                                            needValidate={contentProps[key].needValidate}
                                            required={contentProps[key].required}
                                        />
                                    </InfoField>
                                );
                            }
                        }) :
                        _.map(user, (item, key) => {
                            if(contentProps[key] && item.length) {
                                return (
                                    <InfoField
                                        key={key}
                                        label={contentProps[key].label}
                                        value={item}
                                    />
                                );
                            }
                        })
                }
            </div>
        );
    }
}

export default UserFormContent;
