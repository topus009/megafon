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
        if(this.isNew()) {
            return 'Новый пользователь';
        }
        if(this.isEdit()) {
            return 'Редактирование пользователя';
        }
        return 'Профиль пользователя';
    }
    handleClose() {
        const {history} = this.props;
        history.push({
            pathname: '/contacts',
            query: {},
            state: null
        });
    }
    isEditable() {
        return this.isNew() || this.isEdit();
    }
    isNew() {
        const {match: {path}} = this.props;
        return path === '/adduser';
    }
    isEdit() {
        const {match: {path}} = this.props;
        return path.search('edit') >= 0;
    }
    getUserData() {
        const {store: {getUser}, match: {params}} = this.props;
        if(params.userId) {
            return getUser(params.userId);
        }
        return false;
    }
    render() {
        const {store: {saveUser, saveUserToStore}, match: {params}} = this.props;
        return (
            <Form
                onClose={() => this.handleClose()}
                onSave={() => {
                    saveUser(this.isNew(), params.userId);
                    this.handleClose();
                }}
                isEditable={this.isEditable()}
                title={this.renderFormTitle()}
            >
                <div className='content'>
                    <div>UserAddForm</div>
                    <UserFormContent
                        isEditable={this.isEditable()}
                        userData={this.getUserData()}
                        saveUserToStore={saveUserToStore}
                    />
                </div>
            </Form>
        );
    }
}

export default inject('store')(observer(UserForm));
