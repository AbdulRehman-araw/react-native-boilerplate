import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerItems} from './DrawerItem';

const {width} = Dimensions.get('window');

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        swipeEdgeWidth: 0,
        drawerStyle: {width: width * 0.85, backgroundColor: 'transparent'},
        headerShown: false,
      }}
      initialRouteName="bottom"
      drawerContent={props => <DrawerItems {...props} />}></Drawer.Navigator>
  );
}
