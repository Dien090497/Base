// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen
import WelcomeScreen from '../features/welcome/WelcomeScreen';
import LoginScreen from '../features/auth/login/LoginScreen';
import {stackNavigationConfigs} from './config/options';
import {AUTHENTICATE_ROUTE} from './config/routeName';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigationConfigs}>
      {/*<Stack.Screen*/}
      {/*  name={AUTHENTICATE_ROUTE.WELCOME_SCREEN}*/}
      {/*  component={WelcomeScreen}*/}
      {/*/>*/}
      <Stack.Screen name={'main'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

function App() {
  return <AppStack />;
}

export default App;
