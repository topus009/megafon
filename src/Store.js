import _ from 'lodash';
import {observable, action, runInAction} from 'mobx';
import {localStorageName} from '../config.local';

class Store {
    @observable users = {}
    @observable user = {}
    @observable loading = false
    @action getUsers = async() => {
        this.loading = true;
        await this.getUsersFromLS();
        runInAction(() => {
            this.loading = false;
        });
    }
    getUniqUserId = () => {
        const usersLength = _.size(this.users);
        if(usersLength) {
            return 'id_' + (usersLength + 1);
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
