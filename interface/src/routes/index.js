import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import PrivateRoute from './private';
import GuestRoute from './guest';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Register from '~/pages/Register';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <GuestRoute exact path="/" component={() => <Login />} />
      <GuestRoute path="/register" component={() => <Register />} />
      <PrivateRoute path="/chat" component={() => <Main />} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
