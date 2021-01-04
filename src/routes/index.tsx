import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import {useAuth} from '../hooks/auth'

import App from './App.routes';
import Auth from './auth.routes';
import Cad from './cad.routes';


const Routes: React.FC = () => {
    const { logged } = useAuth();

    return (
        <BrowserRouter>
            { logged ? <App/> : <Auth/> || <Cad/> }
        </BrowserRouter>
    )
}
    
export default Routes;