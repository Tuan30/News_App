import { View, Text } from 'react-native'
import React from 'react'
import CategorySetting from '../components/CategorySetting'
import { COLORS, FONTSIZE } from "../constant"
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

const SettingScreen = () => {

    const categoryData = useSelector(state => state.Category.category)

    const showSetting = ({ item }) => {
        return (
            <CategorySetting data={item} />
        )
    }

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
                <FlatList
                    renderItem={showSetting}
                    data={categoryData}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default SettingScreen