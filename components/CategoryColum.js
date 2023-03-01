import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE } from '../constant'
import ProductColum from './ProductColum'
import ProductGrid from './ProductGrid'

const height = Dimensions.get('window').height - 200

const CategoryColum = ({ title }) => {
    return (
        <View style={{
            width: '100%',
            height: height / 2
        }} >
            <View style={{
                height: 30,
                borderBottomColor: COLORS.primary,
                borderBottomWidth: 3,
                marginBottom: 15
            }}>
                <Text style={{
                    backgroundColor: COLORS.primary,
                    maxWidth: 120,
                    fontWeight: 'bold',
                    fontSize: 14,
                    textAlign: 'center',
                    height: '100%',
                    lineHeight: 30,
                    color: COLORS.second
                }}>{title}</Text>
            </View>

            <View style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <ProductGrid />
                </ScrollView>
            </View>
        </View>
    )
}

export default CategoryColum