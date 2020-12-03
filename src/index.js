import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';

import themes from './constants/themes';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

const stackOptions = {

    headerShown: false

}

const App = () => {

    return (

        <SafeAreaView style={{ flexGrow: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor={themes.primary} />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" options={stackOptions} component={HomeScreen} />
                    <Stack.Screen name="Details" options={stackOptions} component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>

    )


}

export default App
