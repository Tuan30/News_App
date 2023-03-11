const { createSlice } = require("@reduxjs/toolkit");

const SettingSlice = createSlice({
    name: 'Setting',
    initialState: {
        home: [
            { id: 10, type: 'grid', status: true },
            { id: 2, type: 'grid', status: true },
            { id: 3, type: 'grid', status: true }
        ]
    },
    reducers: {}
})

export const { } = SettingSlice.actions
export default SettingSlice.reducer