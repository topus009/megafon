import React from 'react';
import _ from 'lodash';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import config from '../../config.local';
import Button from '../common/Button';
import {deleteUser} from '../actions/AppActions';

class UserListItem extends React.Component {
    handleClick = () => {
        this.props.deleteUser(this.props.userId);
    }
    handleEdit = () => {
        this.props.history.push(`${config.basename}/user/${this.props.userId}/edit`);
    }
    getDeriverStateFromProps
    render() {
        const {userId, users} = this.props;
        const user = _.find(users, {_id: userId});
        return (
            <div className='userlist_block'>
                <NavLink to={`${config.basename}/user/${userId}`}>
                    <div
                        className='userlist_item'>
                        {user.fio}
                    </div>
                </NavLink>
                <div className='user_control_buttons'>
                    <Button
                        fontIcon='&#9998;'
                        title='Редактировать'
                        onClick={this.handleEdit}
                        classNames='edit'
                    />
                    <Button
                        fontIcon='&#10005;'
                        title='Удалить'
                        onClick={this.handleClick}
                        classNames='delete'
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps({app}) {
    const {users} = app;
    return {users};
}

function mapDispatchToProps(dispatch) {
    return {
        deleteUser: id => dispatch(deleteUser(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);
