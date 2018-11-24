import _ from 'lodash';
import * as React from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import * as actions from '../actions/AppActions';
import * as types from '../types';
import UserFormContent from './UserFormContent';

class UserForm extends React.PureComponent<types.UserForm> {
    renderFormTitle = ():string => {
        if(this.isNew()) {
            return 'Новый пользователь';
        }
        if(this.isEdit()) {
            return 'Редактирование пользователя';
        }
        return 'Профиль пользователя';
    }
    handleClose = ():void => {
        const {history} = this.props;
        history.push({
            pathname: `${config.basename}/contacts`,
            query: {},
            state: null
        });
    }
    isEditable = ():boolean => this.isNew() || this.isEdit()
    isNew = ():boolean => {
        const {match: {path}} = this.props;
        return path.search('adduser') >= 0;
    }
    isEdit = ():boolean => {
        const {match: {path}} = this.props;
        return path.search('edit') >= 0;
    }
    saveUserToStore = ():void => {
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

function mapStateToProps(store: types.AppState) {
    return {store};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
