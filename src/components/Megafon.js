import React from 'react';
import {observer} from 'mobx-react';
import {lifecycle} from 'recompose';
import _ from 'lodash';

function Megafon({store}) {
  return (
    <div className='wrapper'/>
  );
}

const WithPosts = lifecycle({
  componentDidMount() {
    const {preloadData} = this.props.store;
      preloadData();
    }
});

export default WithPosts(observer(Megafon));
