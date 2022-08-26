import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {addData} from '../../../state-management/redux/user/action';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs(props) {
  console.log('AAAA', props);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
