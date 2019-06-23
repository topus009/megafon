import React, { Component } from 'react';
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

class UserFormContent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     canShow: false,
  //   };
  // }

  componentDidMount() {
    const { clearFields, saveUserToStore, isNew } = this.props;
    if (!isNew) {
      saveUserToStore();
    } else {
      clearFields();
    }
  }

  render() {
    const { isEditable, user, fieldErrors, editUser } = this.props;
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
            })
          : map(user, (item, key) => {
              if (contentProps[key] && item.length) {
                return <InfoField key={`InfoField_${key}`} label={contentProps[key].label} value={item} />;
              }
            })}
      </div>
    );
  }
}

function mapStateToProps({ app }) {
  const { user, fieldErrors } = app;
  return { user, fieldErrors };
}

function mapDispatchToProps(dispatch) {
  return {
    editUser: data => dispatch(editUser(data)),
    clearFields: () => dispatch(clearFields()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFormContent);
