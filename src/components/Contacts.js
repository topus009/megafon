import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import _ from 'lodash';
import Form from '../common/Form';
import UserListItem from './UserListItem';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.store.getUsers();
    }
    handleClose() {
        const {history} = this.props;
        history.push({
            pathname: '/home',
            query: {},
            state: null
        });
    }
    render() {
        const {users, loading, deleteUser} = this.props.store;
        return (
            <Form
                onClose={() => false}
                title='Контакты'
            >
                <div className='content'>
                    {
                        !loading &&
                            _.map(users, (item, key) =>
                                <UserListItem
                                    key={key}
                                    id={key}
                                    user={item}
                                    deleteUser={deleteUser}
                                    history={this.props.history}
                                />
                            )
                    }
                </div>
            </Form>
        );
    }
}

export default inject('store')(observer(Contacts));
