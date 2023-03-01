import { View, Text } from 'react-native'
import React from 'react'
import CategorySetting from '../components/CategorySetting'
import { COLORS, FONTSIZE } from "../constant"

const SettingScreen = () => {
    return (
        <View style={{
            flex: 1,
            paddingVertical: 15,
            paddingHorizontal: 20,
            backgroundColor: COLORS.background
        }}>
            <View style={{
                backgroundColor: COLORS.white,
                paddingVertical: 30,
                paddingHorizontal: 20
            }}>
                <Text style={{
                    color: COLORS.settingTitle,
                    fontSize: FONTSIZE.h1,
                    fontWeight: 'bold',
                    marginBottom: 30
                }}>Danh mục</Text>
                <CategorySetting />
                <CategorySetting />
                <CategorySetting />
                <CategorySetting />
            </View>
        </View>
    )
}

export default SettingScreen