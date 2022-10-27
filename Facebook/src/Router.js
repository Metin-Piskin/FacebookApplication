import React from 'react';
import { Image, View } from 'react-native';
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
import Login from './Pages/Auth/Login';

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#1877F2",
                tabBarInactiveTintColor: "#65676B",
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        borderTopWidth: 3,
                                        borderColor: "#1877F2",
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={require('./Assets/home.png')}
                                        style={{ tintColor: color }}
                                    />
                                </View>
                            )
                        }
                        return (
                            <Image
                                source={require('./Assets/home.png')}
                                style={{ tintColor: color }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Watch'
                component={Watch}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        borderTopWidth: 3,
                                        borderColor: "#1877F2",
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={require('./Assets/tab-watch.png')}
                                        style={{ tintColor: color }}
                                    />
                                </View>
                            )
                        }
                        return (
                            <Image
                                source={require('./Assets/tab-watch.png')}
                                style={{ tintColor: color }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        borderTopWidth: 3,
                                        borderColor: "#1877F2",
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={require('./Assets/profile.png')}
                                        style={{
                                            tintColor: color,
                                            width: 33,
                                            height: 33,
                                        }}
                                    />
                                </View>
                            )
                        }
                        return (
                            <Image
                                source={require('./Assets/profile.png')}
                                style={{
                                    tintColor: color,
                                    width: 33,
                                    height: 33,
                                }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Group'
                component={Group}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        borderTopWidth: 3,
                                        borderColor: "#1877F2",
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={require('./Assets/tab-groups.png')}
                                        style={{ tintColor: color }}
                                    />
                                </View>
                            )
                        }
                        return (
                            <Image
                                source={require('./Assets/tab-groups.png')}
                                style={{ tintColor: color }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Notification'
                component={Notification}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        borderTopWidth: 3,
                                        borderColor: "#1877F2",
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        source={require('./Assets/tab-notifications.png')}
                                        style={{ tintColor: color }}
                                    />
                                </View>
                            )
                        }
                        return (
                            <Image
                                source={require('./Assets/tab-notifications.png')}
                                style={{ tintColor: color }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='More'
                component={More}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        borderTopWidth: 3,
                                        borderColor: "#1877F2",
                                        marginBottom: 10
                                    }}
                                >
                                    <View
                                        style={{
                                            borderWidth: 2,
                                            borderColor: color,
                                            borderRadius: 90,
                                            marginTop: 3
                                        }}
                                    >
                                        <Image
                                            source={require('./Assets/Avatar.png')}
                                            style={{
                                                width: 25,
                                                height: 25,
                                                borderRadius: 90,

                                            }}
                                        />
                                        <View
                                            style={{
                                                position: 'absolute',
                                                backgroundColor: '#fff',
                                                borderRadius: 25,
                                                borderWidth: 2,
                                                borderColor: color,
                                                top: 15,
                                                right: -8

                                            }}
                                        >
                                            <Image
                                                source={require('./Assets/tab-more.png')}
                                                style={{
                                                    tintColor: color,
                                                    width: 15,
                                                    height: 15,
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        return (
                            <View
                                style={{
                                    borderWidth: 2,
                                    borderColor: color,
                                    borderRadius: 90,
                                }}
                            >
                                <Image
                                    source={require('./Assets/Avatar.png')}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: 90,

                                    }}
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#fff',
                                        borderRadius: 25,
                                        borderWidth: 2,
                                        borderColor: color,
                                        top: 15,
                                        right: -8

                                    }}
                                >
                                    <Image
                                        source={require('./Assets/tab-more.png')}
                                        style={{
                                            tintColor: color,
                                            width: 15,
                                            height: 15,
                                        }}
                                    />
                                </View>
                            </View>
                        )
                    }
                }}
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
                    name='Login'
                    component={Login}
                />
                <Stact.Screen
                    name='BottomTab'
                    component={BottomTab}
                />
            </Stact.Navigator>
        </NavigationContainer>
    )
}
export default Router;