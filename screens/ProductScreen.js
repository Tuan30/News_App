import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { COLORS } from '../constant'
import { WebView } from 'react-native-webview'

const ProductScreen = () => {

    const route = useRoute()

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
            }}>
                <Image
                    style={{ width: "100%", height: 300 }}
                    source={{ uri: route.params.thumb }}
                />
            </View>
            <View style={{
                flex: 3,
                paddingHorizontal: 20,
                paddingVertical: 40,
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
                    flex: 1,
                    backgroundColor: COLORS.white,
                    borderRadius: 15,
                    padding: 10
                }}><WebView source={{ uri: route.params.link }} /></View>
            </View>
        </View>
    )
}

export default ProductScreen