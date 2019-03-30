import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import {getUsers} from '../actions/AppActions';
import UserListItem from './UserListItem';

class Contacts extends Component {
    componentDidMount() {
        const {getUsers} = this.props;
        getUsers();
    }
    handleClose() {
        const {history} = this.props;
        history.push({
            pathname: `${config.basename}/`,
            query: {},
            state: null
        });
    }
    render() {
        const {
            users,
            loading
        } = this.props;
        return (
            <Form
                onClose={this.handleClose}
                title='Контакты'
            >
                <div className='content'>
                    {
                        !loading &&
                            _.map(users, (item, key) =>
                                <UserListItem
                                    key={key}
                                    userId={item._id}
                                    history={this.props.history}
                                />
                            )
                    }
                </div>
            </Form>
        );
    }
}

function mapStateToProps({app}) {
    const {
        users,
        loading
    } = app;
    return {
        users,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
