import React from 'react';
import {
    AppRegistry, 
    Platform
} from 'react-native';
import App from './App';
import config from './config.json';


if (module.hot) module.hot.accept();

AppRegistry.registerComponent(
    config.codeName, 
    () => App
);

if (Platform.OS === 'web') AppRegistry.runApplication(
    config.codeName, 
    {
        initialProps: {},
        rootTag: document.getElementById('app-root')
    }
);
