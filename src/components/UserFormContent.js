import React, { useEffect } from 'react';
import map from 'lodash/map';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import InfoField from '../common/InfoField';
import { editUser, clearFields } from '../actions/AppActions';

const contentProps = {
  fio: {
    label: 'ФИО',
  },
  mainPhone: {
    label: 'Основной номер',
  },
  workPhone: {
    label: 'Рабочий номер',
  },
  email: {
    label: 'Email',
  },
  dateOfBirth: {
    label: 'Дата рождения',
    placeholder: '2000.01.01',
  },
  address: {
    label: 'Адрес',
  },
  vk: {
    label: 'Вконтакте',
  },
  comments: {
    label: 'Комментарии',
  },
};

const UserFormContent = ({ clearFields, saveUserToStore, isNew, isEditable, user, fieldErrors, editUser }) => {
  useEffect(() => {
    if (!isNew) {
      saveUserToStore();
    } else {
      clearFields();
    }
  }, []);
  return (
    <div className="user_form">
      {isEditable
        ? map(user, (item, key) => {
            if (contentProps[key]) {
              return (
                <InfoField key={`InfoField_${key}`} label={contentProps[key].label} hideWrapper>
                  <TextInput
                    key={`TextInput_${key}`}
                    fieldName={key}
                    value={item}
                    placeholder={contentProps[key].placeholder || ''}
                    onChange={editUser}
                    hasError={fieldErrors[key]}
                  />
                </InfoField>
              );
            }
            return null;
          })
        : map(user, (item, key) => {
            if (contentProps[key] && item.length) {
              return <InfoField key={`InfoField_${key}`} label={contentProps[key].label} value={item} />;
            }
            return null;
          })}
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
