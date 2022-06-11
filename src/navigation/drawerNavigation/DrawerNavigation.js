import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../../modules/login/Login';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../../modules/signup/Signup';
import AddTask from '../../modules/addTask/AddTask';
import Tasks from '../../modules/tasks/Tasks';
import Logout from '../../modules/logout/Logout';
import { useSelector } from 'react-redux';
import useDrawerNavigation from './useDrawerNavigation';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    const [] = useDrawerNavigation()
    const isUserLogin = useSelector(state => state.AuthReducer.isUserLogin)

    return (
        <NavigationContainer>
            <Drawer.Navigator options={{
                
            }}>
                {
                    isUserLogin ? (
                        <>
                            <Drawer.Screen
                                name="Tasks"
                                component={Tasks}
                                options={{ drawerLabel: 'Tasks' }}
                            />
                            <Drawer.Screen
                                name="AddTask"
                                component={AddTask}
                                options={{ drawerLabel: 'AddTask' }}
                            />
                            <Drawer.Screen
                                name="Logout"
                                component={Logout}
                                options={{ drawerLabel: 'Logout' }}
                            />
                        </>
                    ) : (
                        <>
                            <Drawer.Screen
                                name="Login"
                                component={Login}
                                options={{ drawerLabel: 'Login' }}
                            />
                            <Drawer.Screen
                                name="Signup"
                                component={Signup}
                                options={{ drawerLabel: 'Signup' }}
                            />
                        </>
                    )
                }
            </Drawer.Navigator>
        </NavigationContainer>
    );
}