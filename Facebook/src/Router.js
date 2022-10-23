import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stact = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from './Pages/Home';
import Watch from './Pages/Watch';
import Group from './Pages/Group';
import Notification from './Pages/Notification';
import More from './Pages/More';
import Profile from './Pages/Profile';

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='Watch'
                component={Watch}
            />
            <Tab.Screen
                name='Group'
                component={Group}
            />
            <Tab.Screen
                name='Notification'
                component={Notification}
            />
            <Tab.Screen
                name='More'
                component={More}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stact.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stact.Screen
                    name='BottomTab'
                    component={BottomTab}
                />
                <Stact.Screen
                    name='Profile'
                    component={Profile}
                />
            </Stact.Navigator>
        </NavigationContainer>
    )
}
export default Router;