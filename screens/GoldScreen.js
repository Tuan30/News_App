import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTSIZE } from "../constant"
import { GirdPrice } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPriceGold } from "../store/slices/Price"
import { FlatList } from 'react-native'

const GoldScreen = () => {

    const dispatch = useDispatch()
    const priceGold = useSelector(state => state.Price.gold)

    useEffect(() => {
        dispatch(fetchPriceGold())
    }, [])

    const showGold = ({ item }) => {
        return (
            <View>
                <GirdPrice data={item} />
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
                        }}>Loại vàng</Text>
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
                        }}>Mua vào</Text>
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
                        }}>Bán ra</Text>
                    </View>
                </View>
                <View>
                    {priceGold.length !== 0 && (
                        <FlatList
                            data={priceGold}
                            renderItem={showGold}
                            keyExtractor={item => item.type.toString()}
                        />
                    )}
                </View>
            </View>
        </View>
    )
}

export default GoldScreen