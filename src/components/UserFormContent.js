import React, {Component} from 'react';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextInput from '../common/TextInput';
import InfoField from '../common/InfoField';
import * as actions from '../actions/AppActions';

const contentProps = {
    fio: {
        label: 'ФИО'
    },
    mainPhone: {
        label: 'Основной номер'
    },
    workPhone: {
        label: 'Рабочий номер'
    },
    email: {
        label: 'Email'
    },
    dateOfBirth: {
        label: 'Дата рождения',
        placeholder: '2000.01.01'
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
                                            fieldName={key}
                                            value={item}
                                            placeholder={contentProps[key].placeholder}
                                            onChange={value => editUser({key, value})}
                                            hasError={fieldErrors[key]}
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
