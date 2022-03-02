import React from 'react';
import loadable from '@loadable/component'; 
import { Switch, Route, Redirect } from 'react-router-dom';
const Login = loadable(() => import('@pages/Login'));
const CampMain = loadable(() => import('@pages/CampMain'));

const App = () => {
    return( 
        <Switch>
            <Redirect exact path="/" to="/main" />
            <Route path="/login" component={Login} />
            <Route path="/main" component={CampMain} />
        </Switch>
    )
}

export default App;
