import * as React from 'react';
import _ from 'lodash';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import Form from '../common/Form';
import config from '../../config.local';
import * as actions from '../actions/AppActions';
import * as types from '../types';
import UserListItem from './UserListItem';

class Contacts extends React.Component<types.ContactsProps> {
    componentDidMount() {
        const {actions: {getUsers}} = this.props;
        getUsers();
    }
    handleClose = () => {
        const {history} = this.props;
        history.push({
            pathname: `${config.basename}/`,
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
                onClose={() => this.handleClose()}
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

function mapStateToProps(store: types.AppState) {
    return {store};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
