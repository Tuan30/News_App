import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { ProductColum } from '../components'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllArticleWithCategoryId } from '../store/slices/Article'

const CategoryScreen = ({ }) => {

    const route = useRoute()
    const dispatch = useDispatch()
    const articleData = useSelector((state) => state.Article.allItems)

    useEffect(() => {
        dispatch(fetchAllArticleWithCategoryId({ id: route.params.categoryId }))
    }, [])

    const showProduct = ({ item }) => {
        return (
            <ProductColum data={item} />
        )
    }

    return (
        <View style={{
            flex: 1,
            padding: 15
        }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={articleData}
                renderItem={showProduct}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default CategoryScreen