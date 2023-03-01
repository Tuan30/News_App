import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { COLORS } from "../constant"
import { SettingScreen } from "../screens"
import { IconHeader } from '../components'

const Stack = createStackNavigator()

const SettingStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.second
            }}
        >
            <Stack.Screen
                name='SettingScreen'
                component={SettingScreen}
                options={
                    {
                        title: "Cài Đặt",
                        headerLeft: () => (
                            <IconHeader />
                        )
                    }
                } />
        </Stack.Navigator>
    )
}

export default SettingStackScreen