import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: undefined,
    picture: undefined,
}

const loginSlice = createSlice( {
    name: 'login',
    initialState: initialState,
    reducers: {
        setUser ( state, action ) {
            state.username = action.payload
        },
        setPicture ( state, action ) {
            state.picture = action.payload
        },
        resetUser ( state ) {
            state.username = undefined
            state.picture = undefined
        }
    },
} )

export const {
    setUser,
    setPicture,
    resetUser
} = loginSlice.actions
export default loginSlice.reducer
