import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE } from '../constant'
import { GirdPrice } from '../components'

const CoinScreen = () => {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: '#EBFBFF'
        }}>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.white,
                borderRadius: 15,
                shadowColor: COLORS.shadow,
                shadowOffset: {
                    width: 1,
                    height: 2
                },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 5
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 42,
                    backgroundColor: COLORS.primary,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white,
                            fontWeight: 'bold',
                            fontSize: FONTSIZE.h2
                        }}>Coin</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white,
                            fontWeight: 'bold',
                            fontSize: FONTSIZE.h2
                        }}>Price (USD)</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white,
                            fontWeight: 'bold',
                            fontSize: FONTSIZE.h2
                        }}>Chage 24h (%)</Text>
                    </View>
                </View>
                <View>
                    <GirdPrice />
                    <GirdPrice layoutNumber />
                    <GirdPrice />
                    <GirdPrice layoutNumber />
                </View>
            </View>
        </View>
    )
}

export default CoinScreen