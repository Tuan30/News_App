import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { COLORS } from "../constant"
import { CoinScreen } from "../screens"
import { IconHeader } from '../components'

const Stack = createStackNavigator()

const CoinStackScreen = () => {
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
                name='CoinScreen'
                component={CoinScreen}
                options={
                    {
                        title: "Giá Coin",
                        headerLeft: () => (
                            <IconHeader />
                        )
                    }
                } />
        </Stack.Navigator>
    )
}

export default CoinStackScreen