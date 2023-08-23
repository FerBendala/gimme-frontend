import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: undefined,
}

const loginSlice = createSlice( {
    name: 'login',
    initialState: initialState,
    reducers: {
        setUser ( state, action ) {
            state.username = action.payload
        }
    },
} )

export const { setUser } = loginSlice.actions
export default loginSlice.reducer
