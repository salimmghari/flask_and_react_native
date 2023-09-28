import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './redux/app/store';
import Home from './screens/Home';
import Auth from './screens/Auth';
import config from './config.json';


export type RootStackParamList = {
    home: undefined;
    auth: undefined;
}


interface AppProps {
    children?: any;
}


const Stack = createStackNavigator<RootStackParamList>();

const App = (props: AppProps): JSX.Element => {
    return (
        <Provider store={store}>    
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="home" 
                    screenOptions={{
                        title: config.name,
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="auth" component={Auth} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


export default App;
