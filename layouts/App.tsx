import React from 'react';
import loadable from '@loadable/component'; 
import { Switch, Route, Redirect } from 'react-router-dom';

const Login = loadable(() => import('@pages/Login'));
const App = () => {
    return( 
        <Switch>
            <Redirect exact path="/" to="/login" />
            <Route path="/login" component={Login} />
        </Switch>
    )
}

export default App;
