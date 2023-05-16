import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from '../components/TabBar';
import DashboardScreen from '../screens/postAuthScreens/DashboardScreen';
import FeedScreen from '../screens/postAuthScreens/FeedScreen';
import PlansScreen from '../screens/postAuthScreens/PlansScreen';
import WalletScreen from '../screens/postAuthScreens/WalletScreen';
import {BottomTabStackParamList} from '../types/navigators';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Plans" component={PlansScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
