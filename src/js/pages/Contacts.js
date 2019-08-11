import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from '../common/Form';
import { getUsers } from '../actions/AppActions';
import UserListItem from '../components/UserListItem';

const Contacts = ({ getUsers, users, loading, history }) => {
  useEffect(() => {
    getUsers();
  }, []);
  const handleClose = () => history.push('/');
  const renderUserListItems = () =>
    !loading && users.map(item => <UserListItem key={item._id} userId={item._id} history={history} />);

  return (
    <Form onClose={handleClose} title="contacts.form.title">
      <div className="content">{renderUserListItems()}</div>
    </Form>
  );
};

const mapStateToProps = ({ app }) => {
  const { users, loading } = app;
  return {
    users,
    loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
