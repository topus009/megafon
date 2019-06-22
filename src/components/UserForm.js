import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import { saveUser, clearFields, saveUserToStore } from '../actions/AppActions';
import UserFormContent from './UserFormContent';

const UserForm = ({
  history,
  clearFields,
  match: { path, params },
  users,
  saveUserToStore,
  user,
  saveUser,
  errors,
}) => {
  const isNew = () => path.search('adduser') >= 0;
  const isEdit = () => path.search('edit') >= 0;
  const isEditable = () => isNew() || isEdit();
  const renderFormTitle = () => {
    if (isNew()) {
      return 'Новый пользователь';
    }
    if (isEdit()) {
      return 'Редактирование пользователя';
    }
    return 'Профиль пользователя';
  };
  const handleClose = () => {
    clearFields();
    history.push({
      pathname: `${config.basename}/contacts`,
      query: {},
      state: null,
    });
  };
  const handleSaveUserToStore = () => {
    const user = _.find(users, { _id: _.get(params, 'userId') });
    saveUserToStore(user);
  };
  const handleSave = () => {
    saveUser(user);
    clearFields();
    handleClose();
  };
  return (
    <Form
      onClose={handleClose}
      onSave={handleSave}
      isEditable={isEditable()}
      title={renderFormTitle()}
      disabled={errors}
    >
      <div className="content">
        <UserFormContent isEditable={isEditable()} saveUserToStore={handleSaveUserToStore} isNew={isNew()} />
      </div>
    </Form>
  );
};

function mapStateToProps({ app }) {
  const { errors, users, user } = app;
  return {
    errors,
    users,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveUser: user => dispatch(saveUser(user)),
    clearFields: () => dispatch(clearFields()),
    saveUserToStore: user => dispatch(saveUserToStore(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
