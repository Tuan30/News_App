import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/Category"
import SettingSliceReducer from "./slices/Setting"

const store = configureStore({
    reducer: {
        Category: categoryReducer,
        Setting: SettingSliceReducer
    }
})

export default store