import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { COLORS } from '../constant'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductGrid = ({ data }) => {

    const navigation = useNavigation()

    const onArticle = () => {
        navigation.push("ProductScreen", {
            name: data.title,
            id: data.id,
            thumb: data.thumb,
            link: data.link
        })
    }

    return (
        <TouchableOpacity
            onPress={onArticle}
            style={{
                flex: 1,
                width: '100%',
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15,
                paddingHorizontal: 15
            }} >
            <View style={{
                flex: 1,
                backgroundColor: COLORS.background,
                width: '100%',
                height: '100%',
                borderRadius: 15
            }}>
                <View style={{ flex: 2, width: '100%' }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                    }} source={{ uri: data.thumb }} />
                </View>
                <View style={{
                    flex: 1,
                    padding: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: COLORS.title,
                            fontSize: 14,
                            marginBottom: 8,
                            textAlign: 'center',
                        }}
                        numberOfLines={2}>{data.title}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{ color: COLORS.icon }} />
                        <Text>{data.publish_date}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductGrid