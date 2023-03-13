import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTSIZE } from '../constant'
import { GirdPrice } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPriceCoin } from '../store/slices/Price'
import { FlatList } from 'react-native'

const CoinScreen = () => {

    const dispatch = useDispatch()
    const priceCoin = useSelector(state => state.Price.coin)

    useEffect(() => {
        dispatch(fetchPriceCoin())
    }, [])

    const showCoin = ({ item }) => {
        return (
            <View>
                <GirdPrice data={item} coin />
            </View>
        )
    }

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
                    {priceCoin.length !== 0 && (
                        <FlatList
                            data={priceCoin}
                            keyExtractor={item => item.id.toString()}
                            renderItem={showCoin}
                        />
                    )}
                </View>
            </View>
        </View>
    )
}

export default CoinScreen