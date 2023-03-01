import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { COLORS } from '../constant'

const ProductGrid = () => {
    return (
        <TouchableOpacity style={{
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
                    }} source={{ uri: "https://cdnmedia.baotintuc.vn/Upload/XmrgEWAN1PzjhSWqVO54A/files/2018/09/1209/h4.jpg" }} />
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
                        numberOfLines={2}>Hình ảnh vệ tinh 9 cơn bão mạnh cùng lúc xuất hiện bủa vây thế giới</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{ color: COLORS.icon }} />
                        <Text>23/02/2023</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductGrid