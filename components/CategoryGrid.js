import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../constant'
import ProductGrid from './ProductGrid'
import { useDispatch, useSelector } from 'react-redux'

import { fetchArticleWithCategoryId } from '../store/slices/Article'

const height = Dimensions.get('window').height

const CategoryGrid = ({ title, categoryId }) => {

    const articleData = useSelector(state => state.Article.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArticleWithCategoryId({ id: categoryId, limit: 4 }))
    }, [])

    const articleInCategory = articleData?.filter((item) => item.category_id === categoryId)

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

            {
                articleInCategory.length !== 0 && (
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginLeft: -8,
                        marginRight: -8
                    }}>
                        <View style={{ flex: 1, flexWrap: 'wrap', }}>
                            <ProductGrid data={articleInCategory[0]} />
                            <ProductGrid data={articleInCategory[1]} />
                        </View>
                        <View style={{
                            flex: 1, flexWrap: 'wrap',
                        }}>
                            <ProductGrid data={articleInCategory[2]} />
                            <ProductGrid data={articleInCategory[3]} />
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default CategoryGrid