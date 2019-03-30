import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import {
    saveUser,
    clearFields,
    saveUserToStore
} from '../actions/AppActions';
import UserFormContent from './UserFormContent';

class UserForm extends Component {
    renderFormTitle = () => {
        if(this.isNew()) {
            return 'Новый пользователь';
        }
        if(this.isEdit()) {
            return 'Редактирование пользователя';
        }
        return 'Профиль пользователя';
    }
    handleClose = () => {
        const {history, clearFields} = this.props;
        clearFields();
        history.push({
            pathname: `${config.basename}/contacts`,
            query: {},
            state: null
        });
    }
    isEditable = () => this.isNew() || this.isEdit()
    isNew = () => {
        const {match: {path}} = this.props;
        return path.search('adduser') >= 0;
    }
    isEdit = () => {
        const {match: {path}} = this.props;
        return path.search('edit') >= 0;
    }
    saveUserToStore = () => {
        const {
            users,
            match: {params},
            saveUserToStore
        } = this.props;
        const user = _.find(users, {_id: _.get(params, 'userId')});
        saveUserToStore(user);
    }
    handleSave = () => {
        const {
            user,
            saveUser,
            clearFields
        } = this.props;
        saveUser(user);
        clearFields();
        this.handleClose();
    }
    render() {
        const {errors} = this.props;
        return (
            <Form
                onClose={this.handleClose}
                onSave={this.handleSave}
                isEditable={this.isEditable()}
                title={this.renderFormTitle()}
                disabled={errors}
            >
                <div className='content'>
                    <UserFormContent
                        isEditable={this.isEditable()}
                        saveUserToStore={this.saveUserToStore}
                        isNew={this.isNew()}
                    />
                </div>
            </Form>
        );
    }
}

function mapStateToProps({app}) {
    const {errors, users, user} = app;
    return {
        errors,
        users,
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveUser: user => dispatch(saveUser(user)),
        clearFields: () => dispatch(clearFields()),
        saveUserToStore: user => dispatch(saveUserToStore(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
