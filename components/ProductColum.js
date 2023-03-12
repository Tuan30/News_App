import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import Icon from "./Icon"
import { useNavigation } from '@react-navigation/native'

const ProductColum = ({ data }) => {

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
                backgroundColor: COLORS.second,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginBottom: 15,
                borderRadius: 15,
                flexDirection: 'row'
            }}>
            <View style={{ flex: 1 }}>
                <Image style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    resizeMode: 'cover'
                }} source={{ uri: data.thumb }} />
            </View>
            <View style={{
                flex: 1.5,
                padding: 12
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: COLORS.title,
                    marginBottom: 20
                }}>{data.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon style={{ color: COLORS.icon }} />
                    <Text style={{ fontWeight: '400', fontSize: 12 }}>
                        {data.publish_date}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductColum