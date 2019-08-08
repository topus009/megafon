import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import InfoField from '../common/InfoField';
import { editUser, clearFields } from '../actions/AppActions';

const contentProps = {
  fio: {},
  mainPhone: {},
  workPhone: {},
  email: {},
  dateOfBirth: {
    placeholder: '2000.01.01',
  },
  address: {},
  vk: {},
  comments: {},
};

const UserFormContent = ({ clearFields, saveUserToStore, isNew, isEditable, user = [], fieldErrors, editUser }) => {
  useEffect(() => {
    !isNew ? saveUserToStore() : clearFields();
  }, [isNew]);
  const renderEditableField = key =>
    contentProps[key] && (
      <InfoField key={`InfoField_${key}`} label={key} hideWrapper>
        <TextInput
          key={`TextInput_${key}`}
          fieldName={key}
          value={user[key]}
          placeholder={contentProps[key].placeholder || ''}
          onChange={editUser}
          hasError={fieldErrors[key]}
        />
      </InfoField>
    );
  const renderField = key =>
    contentProps[key] && user[key].length ? <InfoField key={`InfoField_${key}`} label={key} value={user[key]} /> : null;
  return (
    <div className="user_form">
      {Object.keys(user).map(key => (isEditable ? renderEditableField(key) : renderField(key)))}
    </div>
  );
};

const mapStateToProps = ({ app }) => {
  const { user, fieldErrors } = app;
  return { user, fieldErrors };
};

const mapDispatchToProps = dispatch => {
  return {
    editUser: data => dispatch(editUser(data)),
    clearFields: () => dispatch(clearFields()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFormContent);
