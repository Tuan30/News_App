import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PriceService from '../../services/price'

export const fetchPriceGold = createAsyncThunk(
    'priceGold/fetchPriceGold',
    async (data, thunkAPI) => {
        const response = await PriceService.getGold()
        return response.data
    }
)

export const fetchPriceCoin = createAsyncThunk(
    'priceCoin/fetchPriceCoin',
    async (data, thunkAPI) => {
        const response = await PriceService.getCoin()
        return response.data
    }
)

const priceSlice = createSlice({
    name: 'price',
    initialState: {
        gold: [],
        coin: []
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchPriceCoin.fulfilled, (state, action) => {
                state.coin = action.payload
            })
            .addCase(fetchPriceCoin.rejected, (state, action) => {
                console.log(action.error.message);
            })
            .addCase(fetchPriceGold.fulfilled, (state, action) => {
                state.gold = action.payload
            })
            .addCase(fetchPriceGold.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const { } = priceSlice.actions
export default priceSlice.reducer


