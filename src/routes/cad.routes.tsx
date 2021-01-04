import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cadastro from '../pages/Cadastro';


const CadRoutes: React.FC = () => (
    <Switch>
        <Route path='/Cadastro' component={Cadastro}/>
    </Switch>
);

export default CadRoutes;