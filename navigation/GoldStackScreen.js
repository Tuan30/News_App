import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { GoldScreen } from '../screens'
import { COLORS } from '../constant'
import { IconHeader } from '../components'

const Stack = createStackNavigator()

const GoldStackScreen = () => {
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
                name='GoldScreen'
                component={GoldScreen}
                options={
                    {
                        title: "Giá Vàng",
                        headerLeft: () => (
                            <IconHeader />
                        )
                    }
                } />
        </Stack.Navigator>
    )
}

export default GoldStackScreen