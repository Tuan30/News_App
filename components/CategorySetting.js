import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE, SELECT_STYLES } from '../constant'
import RNPickerSelect from 'react-native-picker-select';
import { Switch } from 'react-native-paper';

const CategorySetting = ({ data }) => {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
                onValueChange={(value) => console.log(value)}
                items={SELECT_STYLES.option}
                Icon={() => <View />}
                useNativeAndroidPickerStyle={false}
                placeholder={SELECT_STYLES.default}
                style={{
                    inputIOS: {
                        fontSize: FONTSIZE.h3,
                        color: COLORS.black,
                        paddingTop: 10
                    },
                    inputAndroid: {
                        color: COLORS.black
                    }
                }}
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