import React from 'react';
import {observer, inject} from 'mobx-react';
// import {lifecycle} from 'recompose';
import _ from 'lodash';
import {Route, IndexRoute} from 'react-router'

function Megafon(props) {
  console.warn({props});
  return (
    <div className='wrapper'>
      <Route exact path='/' component={Home}/>
      <Route path='/user'>
          <IndexRoute component={User}/>
          <Route path=':userId' components={UserInfo}/>
          <Route path=':userId/edit' components={UserEditForm}/>
      </Route>
      <Route path='/adduser' component={UserAddForm}/>
      <Route path='/contacts' component={Contacts}/>
    </div>
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
