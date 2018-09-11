import _ from 'lodash';
import {observable, action, computed} from 'mobx';
import {localStorageName} from '../config.local';

class Store {
  @observable users = {}
  @computed get getUniqUserId() {
      const usersLength = _.size(this.users);
      if(usersLength) {
          return 'id_' + (usersLength + 1);
      } return 'id_' + 0;
  }
  getUser = id => this.users[id]
  prepareUserData = (isNew, user, id) => {
      if(isNew) {
          const newId = this.getUniqUserId();
          this.saveUserToLS(user, newId);
      } else {
          this.saveUserToLS(user, id);
      }
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
