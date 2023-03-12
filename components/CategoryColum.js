import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTSIZE } from '../constant'
import ProductColum from './ProductColum'
import ProductGrid from './ProductGrid'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticleWithCategoryId } from '../store/slices/Article'

const height = Dimensions.get('window').height - 200

const CategoryColum = ({ title, categoryId }) => {
    const articleData = useSelector(state => state.Article.items)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(fetchArticleWithCategoryId({ id: categoryId, limit: 4 }))
    }, [])

    const articleInCategory = articleData?.filter((item) => item.category_id === categoryId)

    const onChange = () => {
        navigation.push("CategoryScreen", {
            name: title,
            categoryId: categoryId,
        })
    }
    return (
        <TouchableOpacity onPress={onChange} style={{ width: '100%', height: height / 2 }} >
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

            {articleInCategory.length !== 0 && (
                <View style={{ flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <ProductColum data={articleInCategory[0]} />
                        <ProductColum data={articleInCategory[1]} />
                        <ProductColum data={articleInCategory[2]} />
                        <ProductColum data={articleInCategory[3]} />
                    </ScrollView>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default CategoryColum