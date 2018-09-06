import _ from 'lodash';
import {decorate, observable, action} from 'mobx';

class Store {
    data = [];
    preloadData = async () => {
      const {items} = await preloadData();
      this.data = items;
    }
}

decorate(
  Store, {
    data: observable,
    preloadData: action,
  }
)

export default new Store();
