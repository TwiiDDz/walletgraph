import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './Screens/Login';

const routerOptions = {
    initialRouteName: 'Login',
};

const Router = StackNavigator(
    {
        Login: {
            screen: Login,
        },
    },
    routerOptions
);

export default Router;
