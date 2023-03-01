import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE } from '../constant'

const GirdPrice = ({ layoutNumber }) => {

    return (
        <View style={{
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            borderBottomColor: COLORS.border,
            borderBottomWidth: 1,
            paddingHorizontal: 5,
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: FONTSIZE.h3,
                    color: COLORS.layoutText
                }}>Vang SJC</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: FONTSIZE.h3,
                    color: COLORS.numberInc
                }}>52.000.000</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: FONTSIZE.h3,
                    color: layoutNumber ? COLORS.numberDow : COLORS.numberInc
                }}>50.000.000</Text>
            </View>
        </View>
    )
}

export default GirdPrice