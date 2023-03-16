import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { CategoryColum, CategoryGrid } from "../components"
import { COLORS } from '../constant'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from "../store/slices/Category"

const HomeScreen = () => {
    const dispatch = useDispatch()
    const categoryData = useSelector((state) => state.Category.category)
    const showHome = useSelector((state) => state.Setting.home)

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])
    const showCategoryHome = ({ item }) => {

        const categoryItem = categoryData?.find(category => category.id === item.id)

        return (
            item.status && categoryItem && (
                item.type === 'grid'
                    ? <CategoryGrid title={categoryItem.name} categoryId={categoryItem.id} />
                    : <CategoryColum title={categoryItem.name} categoryId={categoryItem.id} />
            )
        )
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingTop: 24,
            backgroundColor: COLORS.background
        }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={showHome}
                renderItem={showCategoryHome}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default HomeScreen