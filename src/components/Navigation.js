import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client'; 
import client from '../client/apollo';
import FilmListScreen from '../Screens/FilmListScreen';
import FilmDetailScreen from '../Screens/FilmDetailScreen';


const Stack = createNativeStackNavigator();

const Navigation = ()=> {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="FilmList"
                    screenOptions={{headerShown: false}}
                    options={{title: 'Welcome'}}>
                    <Stack.Screen
                    name="FilmList"
                    component={FilmListScreen}
                    />
                    <Stack.Screen
                    name="FilmDetail"
                    component={FilmDetailScreen}
                    />
            </Stack.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    )
}

export default Navigation;