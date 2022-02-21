import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='Home' component={Tabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AuthNav;