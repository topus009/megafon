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
    render() {
        const {users, loading} = this.props.store;
        return (
            <Form
                onClose={() => false}
                onSave={() => false}
                isEditable={true}
                title='Контакты'
            >
                <div className='content'>
                    <div>Contacts</div>
                    {
                        !loading &&
                            _.map(users, (item, key) =>
                                <UserListItem
                                    key={key}
                                    id={key}
                                    user={item}
                                />
                            )
                    }
                </div>
            </Form>
        );
    }
}

export default inject('store')(observer(Contacts));
