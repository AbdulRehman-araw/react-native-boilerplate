import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomItem from '../BottomTabNavigation/BottomItem';
import Profile from '../../screens/Profile/index';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="userHome"
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomItem {...props} />}>
      <Tab.Screen name="userHome" component={Profile} />
      <Tab.Screen
        name="agreement"
        component={Profile}
        options={{title: 'Agreenment'}}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{title: 'profile'}}
      />

      <Tab.Screen
        name="notification"
        component={Profile}
        options={{title: 'Notification'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
