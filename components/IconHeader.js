import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constant';
import { useNavigation } from '@react-navigation/native';

const IconHeader = () => {

    const navigation = useNavigation()
    const onpenDrawer = () => {
        navigation.openDrawer()
    }

    return (
        <TouchableOpacity onPress={onpenDrawer} style={{ marginLeft: 25 }}>
            <Feather name="menu" size={24} color={COLORS.white} />
        </TouchableOpacity>
    )
}

export default IconHeader
