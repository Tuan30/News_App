import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE } from '../constant'
import { FormatChangeCoin, FormatPriceCoin, FormatPriceGold } from "../help"

const GirdPrice = ({ data, coin }) => {

    let name = coin ? data.name : data.type
    let buy = coin ? FormatPriceCoin(data.price) : FormatPriceGold(data.buy)
    let sell = coin ? FormatChangeCoin(data.percent_change_24h) : FormatPriceGold(data.sell)

    const layoutNumber = data.percent_change_24h > 0 ? COLORS.numberInc : COLORS.numberDow

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
                }}>{name}</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: FONTSIZE.h3,
                    color: COLORS.numberInc
                }}>{buy}</Text>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: FONTSIZE.h3,
                    color: layoutNumber ? COLORS.numberDow : COLORS.numberInc
                }}>{sell}</Text>
            </View>
        </View>
    )
}

export default GirdPrice