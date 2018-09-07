import React from 'react';
import {observer, inject} from 'mobx-react';
// import {lifecycle} from 'recompose';
import _ from 'lodash';

function Megafon(props) {
  console.warn({props});
  return (
    <div className='wrapper'/>
  );
}

// const WithPosts = lifecycle({
//   componentDidMount() {
//     const {preloadData} = this.props.store;
//       preloadData();
//     }
// });

// export default WithPosts(observer(Megafon));
export default
  inject('routing')(observer(Megafon));
