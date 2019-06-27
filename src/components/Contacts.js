import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from '../common/Form';
import { getUsers } from '../actions/AppActions';
import UserListItem from './UserListItem';

const Contacts = ({ getUsers, users, loading, history }) => {
  const handleClose = () => {
    history.push({
      pathname: '/',
      query: {},
      state: null,
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Form onClose={handleClose} title="Контакты">
      <div className="content">
        {!loading && users.map(item => <UserListItem key={item._id} userId={item._id} history={history} />)}
      </div>
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
