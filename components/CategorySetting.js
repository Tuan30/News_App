import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE } from '../constant'

const CategorySetting = ({ data }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: COLORS.white,
            borderTopColor: COLORS.settingTitle,
            paddingVertical: 20
        }}>
            <Text style={{ fontSize: FONTSIZE.h2 }}>{data.name}</Text>
        </View>
    )
}

export default CategorySetting