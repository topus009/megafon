import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Form from '../common/Form';
import UserFormContent from './UserFormContent';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderFormTitle = () => {
        const {match: {path}} = this.props;
        if(path === '/adduser') {
            return 'Новый пользователь';
        }
        if(path.search('edit') >= 0) {
            return 'Редактирование пользователя';
        }
        return 'Профиль пользователя';
    }
    render() {
        const {store: {saveUser, saveUserToStore}} = this.props;
        return (
            <Form
                onClose={() => false}
                onSave={() => saveUser(true)}
                isEditable={true}
                title={this.renderFormTitle()}
            >
                <div className='content'>
                    <div>UserAddForm</div>
                    <UserFormContent
                        isEditable={true}
                        saveUserToStore={saveUserToStore}
                    />
                </div>
            </Form>
        );
    }
}

export default inject('store')(observer(UserForm));
