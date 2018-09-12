import _ from 'lodash';
import {observable, action, runInAction} from 'mobx';
import {localStorageName} from '../config.local';

class Store {
    @observable users = {}
    @observable user = {}
    @observable loading = true
    @observable errors = false
    @action getUsers = async() => {
        await this.getUsersFromLS();
        runInAction(() => {
            this.loading = false;
        });
    }
    @action setErrors = errors => {
        this.errors = _.find(errors);
    }
    getUniqUserId = () => {
        const usersLength = _.size(this.users);
        if(usersLength) {
            const keys = _.map(_.keys(this.users), key => +key.replace('id_', ''));
            return 'id_' + (_.maxBy(keys, key => +key) + 1);
        } return 'id_' + 0;
    }
    getUser = id => this.users[id]
    saveUser = (isNew, id) => {
        if(isNew) {
            const newId = this.getUniqUserId();
            this.saveUserToLS(this.user, newId);
        } else {
            this.saveUserToLS(this.user, id);
        }
    }
    @action saveUserToStore = user => {
        this.user = user;
    }
    @action saveUserToLS = (user, id) => {
        const data = {
            ...this.users,
            [id]: user
        };
        localStorage.setItem(localStorageName, JSON.stringify(data));
        this.users = data;
    }

    @action getUsersFromLS = () => {
        const users = localStorage.getItem(localStorageName);
        if(users !== null) {
            this.users = JSON.parse(users);
        }
    }
    @action deleteUser = id => {
        const data = _.omit(this.users, id);
        localStorage.setItem(localStorageName, JSON.stringify(data));
        this.users = data;
    }
}

export default new Store();
