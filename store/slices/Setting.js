const { createSlice } = require("@reduxjs/toolkit");

const SettingSlice = createSlice({
    name: 'Setting',
    initialState: {
        home: [
            { id: 1, type: 'grid', status: true },
            { id: 2, type: 'colum', status: true },
            { id: 3, type: 'colum', status: true }
        ]
    },
    reducers: {}
})

export const { } = SettingSlice.actions
export default SettingSlice.reducer