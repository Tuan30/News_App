import { View, Text } from 'react-native'
import React from 'react'
import { HomeScreen } from '../screens'
import { createStackNavigator } from '@react-navigation/stack'
import { COLORS } from '../constant'
import { IconHeader } from '../components'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second
            }}
        >
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        title: "Trang chủ",
                        headerLeft: () => (
                            <IconHeader />
                        )
                    }
                } />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen