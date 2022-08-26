import React from 'react';
import RootScreen from './routes/RootScreen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './routes/config/NavigationService';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './state-management/store';
import {ActivityIndicator} from 'react-native';
import codePush from 'react-native-code-push';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export const config = {
  screens: {
    main: {
      screens: {
        Home: {
          path: 'home',
        },
        Setting: {
          path: 'a',
        },
      },
    },
  },
};

export const linking = {
  prefixes: ['base://', 'base'],
  config,
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <RootScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default codePush(codePushOptions)(App);
