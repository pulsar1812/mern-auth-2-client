import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Activate from './components/auth/Activate';
import Dashboard from './Dashboard';
import Admin from './Admin';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import Forgot from './components/auth/Forgot';
import Reset from './components/auth/Reset';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/auth/activate/:token' exact component={Activate} />
        <PrivateRoute path='/private' exact component={Dashboard} />
        <AdminRoute path='/admin' exact component={Admin} />
        <Route path='/auth/password/forgot' exact component={Forgot} />
        <Route path='/auth/password/reset/:token' exact component={Reset} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
