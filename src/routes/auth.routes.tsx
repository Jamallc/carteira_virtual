import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Signin'
import Cadastro from '../pages/Cadastro';


const AuthRoutes: React.FC = () => {
    const path = 'http://localhost:3000/Cadastro';

    return(
        <Switch>
            <Route path={window.location.href === path ? '/Cadastro' : '/'} component={window.location.href === path ? Cadastro : SignIn} />
        </Switch>
    )
};

export default AuthRoutes;