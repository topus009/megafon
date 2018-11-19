import React, {Component} from 'react';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextInput from '../common/TextInput';
import InfoField from '../common/InfoField';
import {hasOnlyDigits, yearIsLessThanCurrent, isNotEmpty} from '../helpers';
import * as actions from '../actions/AppActions';

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
            canShow: false
        };
    }
    // componentWillReceiveProps(prevProps) {
    //     const prevUser = prevProps.store.user;
    //     const currentUser = this.props.store.user;
    //     if(!_.isEqual(prevUser, currentUser)) {
    //         this.setState({canShow: true});
    //     }
    // }
    // componentDidUpdate(prevProps, prevState) {
    // const prevUser = prevState.user;
    //     const {user, errors} = this.state;
    //     const {saveUserToStore, setErrors} = this.props;
    //     if(!_.isEqual(prevUser, user)) {
    //         saveUserToStore(user);
    //     }
    //     setErrors(errors);
    // }
    componentDidMount() {
        const {actions: setErrors, store: {fieldErrors}, saveUserData, isNew} = this.props;
        if(!isNew) {
            saveUserData();
        }
        // setErrors(fieldErrors);
    }
    render() {
        const {
            isEditable,
            store: {
                user,
                fieldErrors
            },
            actions: {
                editUser,
                setError
            }
        } = this.props;
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
                                            onChange={value => editUser({key, value})}
                                            setError={value => setError({key, value})}
                                            hasError={fieldErrors[key]}
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

function mapStateToProps({app}) {
    return {store: app};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContent);
