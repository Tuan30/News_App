import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import Icon from "./Icon"

const ProductColum = () => {
    return (
        <TouchableOpacity style={{
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
                }} source={{ uri: "https://cdnmedia.baotintuc.vn/Upload/XmrgEWAN1PzjhSWqVO54A/files/2018/09/1209/h4.jpg" }} />
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
                }}>Hình ảnh vệ tinh 9 cơn bão mạnh cùng lúc xuất hiện bủa vây thế giới</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon style={{ color: COLORS.icon }} />
                    <Text style={{ fontWeight: '400', fontSize: 12 }}>
                        23/02/2023
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductColum