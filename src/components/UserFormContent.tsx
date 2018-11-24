import * as React from 'react';
import _ from 'lodash';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import TextInput from '../common/TextInput';
import InfoField from '../common/InfoField';
import * as actions from '../actions/AppActions';
import * as types from '../types';

const contentProps:types.contentProps = {
    fio: {
        label: 'ФИО',
        placeholder: ''
    },
    mainPhone: {
        label: 'Основной номер',
        placeholder: ''
    },
    workPhone: {
        label: 'Рабочий номер',
        placeholder: ''
    },
    email: {
        label: 'Email',
        placeholder: ''
    },
    dateOfBirth: {
        label: 'Дата рождения',
        placeholder: '2000.01.01'
    },
    address: {
        label: 'Адрес',
        placeholder: ''
    },
    vk: {
        label: 'Вконтакте',
        placeholder: ''
    },
    comments: {
        label: 'Комментарии',
        placeholder: ''
    }
};

class UserFormContent extends React.Component<types.UserFormContent> {
    componentDidMount() {
        const {actions: {clearFields}, saveUserToStore, isNew} = this.props;
        if(!isNew) {
            saveUserToStore();
        } else {
            clearFields();
        }
    }
    render() {
        const {
            isEditable,
            store: {
                user,
                fieldErrors
            },
            actions: {
                editUser
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
                                            hasError={fieldErrors[key]}
                                        />
                                    </InfoField>
                                );
                            } return null;
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
                            } return null;
                        })
                }
            </div>
        );
    }
}

function mapStateToProps(store: types.AppState) {
    return {store};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContent);
