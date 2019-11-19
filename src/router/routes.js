import React from 'react'
import{createStackNavigator} from 'react-navigation'
import Login from '../screens/login';
import Register from '../screens/register';



export const Stack = createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Register:{
        screen:Register,
        navigationOptions:{
            header:null
        }
    }
})