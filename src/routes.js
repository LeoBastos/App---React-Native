import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Home from './pages/Home';
import Local from './pages/Local';
import Noticias from './pages/Noticias';
import Prev from './pages/Prevencao';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="home" component={Home} />
                <AppStack.Screen name="noticias" component={Noticias} />
                <AppStack.Screen name="prev" component={Prev} />
                <AppStack.Screen name="local" component={Local} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}