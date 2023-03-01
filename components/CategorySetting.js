import { View, Text } from 'react-native'
import React, { useState } from 'react'
import RNPickerSelect from "react-native-picker-select";
import { COLORS, FONTSIZE, SELECT_STYLES } from "../constant"
import { Switch } from 'react-native-paper';

const CategorySetting = () => {

    const [isSwitchOn, setIsSwitchOn] = useState(false)
    const [valueCheck, setValueCheck] = useState('')
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    return (
        <View style={{
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.border,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'

        }}>
            <Text style={{
                fontSize: FONTSIZE.h2,
                fontWeight: 'bold'
            }}>The Thao</Text>
            <RNPickerSelect
                style={{
                    inputAndroid: {
                        paddingLeft: 10
                    },
                    inputIOS: {
                        fontSize: FONTSIZE.h3,
                        color: COLORS.black,
                        paddingTop: 10
                    }
                }}
                Icon={() => <View />}
                onValueChange={() => valueCheck(value)}
                items={SELECT_STYLES.option}
                useNativeAndroidPickerStyle={false}
                value={valueCheck}
                placeholder={SELECT_STYLES.default}
            />
            <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color={COLORS.primary}
            />
        </View>
    )
}

export default CategorySetting