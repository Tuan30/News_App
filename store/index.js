import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/Category"
import SettingSliceReducer from "./slices/Setting"
import ArticleReducer from "./slices/Article"
import PriceReducer from "./slices/Price"

const store = configureStore({
    reducer: {
        Category: categoryReducer,
        Setting: SettingSliceReducer,
        Article: ArticleReducer,
        Price: PriceReducer,
    }
})

export default store