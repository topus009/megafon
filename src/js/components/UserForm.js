import React from 'react';
import { connect } from 'react-redux';
import Form from '../common/Form';
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
      return 'userForm.title.new';
    }
    if (isEdit()) {
      return 'userForm.title.edit';
    }
    return 'userForm.title.profile';
  };
  const handleClose = () => {
    clearFields();
    history.push('/contacts');
  };
  const handleSaveUserToStore = () => {
    const user = users.find(user => user._id === params.userId);
    saveUserToStore(user);
  };
  const handleSave = () => {
    saveUser(user);
    clearFields();
    handleClose();
  };
  const editable = isEditable();
  const isNewUser = isNew();
  return (
    <Form onClose={handleClose} onSave={handleSave} isEditable={editable} title={renderFormTitle()} disabled={errors}>
      <UserFormContent isEditable={editable} saveUserToStore={handleSaveUserToStore} isNew={isNewUser} />
    </Form>
  );
};

const mapStateToProps = ({ app }) => {
  const { errors, users, user } = app;
  return {
    errors,
    users,
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: user => dispatch(saveUser(user)),
    clearFields: () => dispatch(clearFields()),
    saveUserToStore: user => dispatch(saveUserToStore(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
