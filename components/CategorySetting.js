import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Switch } from 'react-native-paper';
import { COLORS, FONTSIZE, SELECT_STYLES } from '../constant';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector, useDispatch } from 'react-redux'
import { SettingHome } from '../store/slices/Setting'

const CategorySetting = ({ data }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [valueCheck, setValueCheck] = useState('')
    const settingData = useSelector(state => state.Setting.home)
    const dispatch = useDispatch()


    const item = settingData.find(item => item.id == data.id)

    useEffect(() => {
        item?.status && setIsSwitchOn(true)
        setValueCheck(item?.type)
    }, [])

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        dispatch(SettingHome({
            id: data.id,
            type: valueCheck,
            status: !isSwitchOn
        }))
    }

    const checkValue = (value) => {
        if (value) {
            setValueCheck(value)
            dispatch(SettingHome({
                id: data.id,
                type: value,
                status: isSwitchOn
            }))
        }
    }

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
            <RNPickerSelect
                style={{
                    inputIOS: {
                        fontSize: FONTSIZE.h3,
                        color: COLORS.black,
                        paddingTop: 10
                    },
                    inputAndroid: {
                        padding: 10
                    }
                }}
                Icon={() => <View />}
                onValueChange={(value) => checkValue(value)}
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
