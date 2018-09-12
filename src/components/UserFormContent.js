import React, {Component} from 'react';
import _ from 'lodash';
import TextInput from '../common/TextInput';

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
        label: 'Дата рождения'
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
        const {user} = this.state;
        const {saveUserToStore} = this.props;
        if(!_.isEqual(prevUser, user)) {
            saveUserToStore(user);
        }
    }
    onChange(key, value) {
        this.setState(({user}) => ({
            user: {
                ...user,
                [key]: value
            }
        }));
    }
    render() {
        const {isEditable} = this.props;
        const {user} = this.state;
        return (
            <div className='user_form'>
                <div>UserFormContent</div>
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
                                        setError={() => false}
                                        needValidate={false}
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
