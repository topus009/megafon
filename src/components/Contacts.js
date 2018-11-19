import React, {Component} from 'react';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import * as actions from '../actions/AppActions';
import UserListItem from './UserListItem';

class Contacts extends Component {
    componentDidMount() {
        const {actions: {getUsers}} = this.props;
        getUsers();
    }
    handleClose() {
        const {history} = this.props;
        history.push({
            pathname: `${config.basename}/home`,
            query: {},
            state: null
        });
    }
    render() {
        const {
            store: {
                users,
                loading
            },
            actions: {
                deleteUser
            }
        } = this.props;
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

function mapStateToProps({app}) {
    return {store: app};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
