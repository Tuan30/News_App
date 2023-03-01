import React from 'react'
import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constant';

const Icon = () => {
    return (
        <View style={{ marginRight: 10 }}>
            <FontAwesome name={'clock-o'} size={18} color={COLORS.icon} />
        </View>
    )
}

export default Icon
