import _ from 'lodash';
import React, {PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import * as actions from '../actions/AppActions';
import UserFormContent from './UserFormContent';

class UserForm extends PureComponent {
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
    saveUserToStore = () => {
        const {store: {users}, match: {params}, actions} = this.props;
        const user = _.find(users, {_id: _.get(params, 'userId')});
        actions.saveUserToStore(user);
    }
    render() {
        const {
            store: {
                errors,
                user
            },
            actions: {
                saveUser,
                clearFields
            }
        } = this.props;
        return (
            <Form
                onClose={() => {
                    clearFields();
                    this.handleClose();
                }}
                onSave={() => {
                    saveUser(user);
                    clearFields();
                    this.handleClose();
                }}
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
    return {store: app};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);