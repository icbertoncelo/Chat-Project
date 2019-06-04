import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

// import PrivateRoute from './private';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/chat" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
