import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerItem } from '@react-navigation/drawer'
import { COLORS } from '../constant'
import { Ionicons } from '@expo/vector-icons'

const DrawerComponents = ({ name, active, setActive }) => {

    const navigation = useNavigation()

    let icon, label;
    switch (name) {
        case 'Home':
        case 'Home':
            icon = 'ios-home-outline';
            label = "Trang chủ";
            break;
        case 'Coin':
            icon = 'ios-pulse-outline';
            label = "Giá coin";
            break;
        case 'Gold':
            icon = 'ios-podium-outline';
            label = "Giá gold";
            break;
        case 'Setting':
            icon = 'ios-settings-outline';
            label = "Cài đặt";
            break;
        default:
            break;
    }

    return (
        <DrawerItem
            focused={active == name ? true : false}
            activeTintColor={COLORS.primary}
            icon={({ color, size }) => (
                <Ionicons name={icon} size={size} color={color} />
            )}
            label={label}
            onPress={() => {
                setActive(name)
                navigation.navigate(name)
            }}
        />
    )
}

export default DrawerComponents