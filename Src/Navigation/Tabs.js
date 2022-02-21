import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../Screens/Profile';
import Preferences from '../Screens/Preferences';
import Mutual from '../Screens/Mutual';
import Settings from '../Screens/Settings';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Preferences" component={Preferences} />
                <Tab.Screen name="Mutual" component={Mutual} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Tabs;