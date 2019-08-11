import React, { lazy, Suspense } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { defaultTheme } from '../config/theme';
import Menu from '../components/Menu';
import Loader from '../common/Loader';

const UserForm = lazy(() => import('../pages/UserForm'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Home = lazy(() => import('../pages/Home'));

const history = createBrowserHistory();

const AppRouter = ({ currentTheme }) => (
  <Router history={history}>
    <Helmet htmlAttributes={{ class: currentTheme ? `theme-${currentTheme}` : `theme-${defaultTheme}` }} />
    <Menu />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/user/:userId" component={UserForm} />
        <Route exact path="/user/:userId/edit" component={UserForm} />
        <Route exact path="/adduser" component={UserForm} />
      </Switch>
    </Suspense>
  </Router>
);

const mapStateToProps = ({ theme: { currentTheme } }) => ({
  currentTheme,
});

export default connect(mapStateToProps)(AppRouter);
