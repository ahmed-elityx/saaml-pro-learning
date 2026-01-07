import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  DetailsScreen,
  HistoryScreen,
  ShipmentsScreen,
  WalletScreen,
  ProfileScreen,
} from '../screens';
import { TabBar } from '../components/organisms/TabBar';
import { TabParamList, HomeStackParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Shipments" component={ShipmentsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

