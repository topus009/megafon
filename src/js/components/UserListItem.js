import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../common/Button';
import { deleteUser } from '../actions/AppActions';

const UserListItem = ({ userId, users, deleteUser, history }) => {
  const user = users.find(user => user._id === userId);
  const handleClick = () => deleteUser(userId);
  const handleEdit = () => history.push(`/user/${userId}/edit`);
  return (
    <div className="userlist_block">
      <NavLink to={`/user/${userId}`}>
        <div className="userlist_item">{user.fio}</div>
      </NavLink>
      <div className="user_control_buttons">
        <Button fontIcon="&#9998;" title="main.edit" onClick={handleEdit} classNames="edit" />
        <Button fontIcon="&#10005;" title="main.delete" onClick={handleClick} classNames="delete" />
      </div>
    </div>
  );
};

const mapStateToProps = ({ app }) => {
  const { users } = app;
  return { users };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: id => dispatch(deleteUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListItem);
