import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/Category"
import SettingSliceReducer from "./slices/Setting"
import ArticleReducer from "./slices/Article"

const store = configureStore({
    reducer: {
        Category: categoryReducer,
        Setting: SettingSliceReducer,
        Article: ArticleReducer
    }
})

export default store