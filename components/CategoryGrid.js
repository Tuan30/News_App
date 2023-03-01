import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import ProductGrid from './ProductGrid'

const height = Dimensions.get('window').height

const CategoryGrid = ({ title }) => {
    return (
        <View style={{ width: '100%', height: height / 2 }}>
            <View style={{
                height: 30,
                borderBottomWidth: 3,
                borderBottomColor: COLORS.primary,
                marginBottom: 15
            }}>
                <Text style={{
                    backgroundColor: COLORS.primary,
                    maxWidth: 140,
                    textAlign: 'center',
                    height: '100%',
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: COLORS.second,
                    lineHeight: 30,
                }}>{title}</Text>
            </View >

            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: -8,
                marginRight: -8
            }}>
                <View style={{
                    flex: 1,
                    flexWrap: 'wrap',
                }}>
                    <ProductGrid />
                    <ProductGrid />
                </View>
                <View style={{
                    flex: 1,
                    flexWrap: 'wrap',
                }}>
                    <ProductGrid />
                    <ProductGrid />
                </View>
            </View>
        </View>


    )
}

export default CategoryGrid