import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from "react-native-vector-icons/Ionicons"
import { COLORS } from "../constant"

import HomeStackScreen from './HomeStackScreen';
import CoinStackScreen from './CoinStackScreen';
import GoldStackScreen from './GoldStackScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'ios-home' : 'ios-home-outline'
                            break;
                        case 'Gold':
                            iconName = focused ? 'ios-podium' : 'ios-podium-outline'
                            break;
                        case 'Coin':
                            iconName = focused ? 'ios-pulse' : 'ios-pulse-outline'
                            break;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.active,
                tabBarInactiveTintColor: COLORS.second,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    height: 75,
                    paddingBottom: 10
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    color: COLORS.second
                },
                headerShown: false
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: "Trang Chủ" }} />
            <Tab.Screen name="Coin" component={CoinStackScreen} options={{ title: "Giá Coin" }} />
            <Tab.Screen name="Gold" component={GoldStackScreen} options={{ title: "Giá Vàng" }} />
        </Tab.Navigator>
    )
}

export default MyTabs