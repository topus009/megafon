import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Menu from '../components/Menu';
import UserForm from '../components/UserForm';
import Contacts from '../components/Contacts';
import Home from '../components/Home';
import { defaultTheme } from '../config/theme';

const history = createBrowserHistory();

const AppRouter = ({ currentTheme }) => (
  <Router history={history}>
    <Helmet htmlAttributes={{ class: currentTheme ? `theme-${currentTheme}` : `theme-${defaultTheme}` }} />
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/user/:userId" component={UserForm} />
      <Route exact path="/user/:userId/edit" component={UserForm} />
      <Route exact path="/adduser" component={UserForm} />
    </Switch>
  </Router>
);

const mapStateToProps = ({ theme: { currentTheme } }) => ({
  currentTheme,
});

export default connect(mapStateToProps)(AppRouter);
