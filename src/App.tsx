import React from 'react';
import RootScreen from './routes/RootScreen';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './routes/config/NavigationService';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './state-management/store';
import {ActivityIndicator} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
