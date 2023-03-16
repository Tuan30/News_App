const { createSlice } = require("@reduxjs/toolkit");

const SettingSlice = createSlice({
    name: 'Setting',
    initialState: {
        home: [
            { id: 10, type: 'grid', status: true },
            { id: 2, type: 'colum', status: true },
            { id: 3, type: 'grid', status: true },
            { id: 1, type: 'colum', status: true },
            { id: 4, type: 'grid', status: true },
            { id: 5, type: 'colum', status: true },
            { id: 6, type: 'colum', status: true }
        ]
    },
    reducers: {
        SettingHome: (state, action) => {
            let { id, type, status } = action.payload
            if (!type) type = 'grid'
            const item = state.home.find(item => item.id === id)
            if (item) {
                state.home = state.home.filter(item => {
                    if (item.id == id) {
                        item.type = type
                        item.status = status
                    }
                    return item
                })
            } else {
                if (!action.payload.type) action.payload.type = 'grid'
                state.home = [...state.home, action.payload]
            }
        }
    }
})

export const { SettingHome } = SettingSlice.actions
export default SettingSlice.reducer