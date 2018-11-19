import _ from 'lodash';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import * as actions from '../actions/AppActions';
import UserFormContent from './UserFormContent';

class UserForm extends Component {
    componentDidMount() {
        if(this.isNew()) {
            const {actions: {clearFields}} = this.props;
            clearFields();
        }
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
    handleClose = () => {
        const {history} = this.props;
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
    saveUserData = () => {
        const {store: {users}, match: {params}, actions} = this.props;
        const user = _.find(users, {_id: _.get(params, 'userId')});
        actions.saveUserToStore(user);
        // return user;
    }
    render() {
        const {
            store: {
                errors,
                user
            },
            actions: {
                saveUser
            }
        } = this.props;
        return (
            <Form
                onClose={this.handleClose}
                onSave={() => {
                    saveUser(user);
                    this.handleClose();
                }}
                isEditable={this.isEditable()}
                title={this.renderFormTitle()}
                disabled={errors}
            >
                <div className='content'>
                    <UserFormContent
                        isEditable={this.isEditable()}
                        saveUserData={this.saveUserData}
                        isNew={this.isNew()}
                    />
                </div>
            </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
