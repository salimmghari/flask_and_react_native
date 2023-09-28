import {AppRegistry} from 'react-native';
import App from './App';
import config from './config.json';


AppRegistry.registerComponent(
    config.codeName, 
    () => App
);
