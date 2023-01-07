import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: {}
    },
    reducers: {

        getUser: (state) => {
            state.user = { name: "kedar" };
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = {};
            state.isAuthenticated = false;
        }
    },
})

export const { getUser, logout } = authSlice.actions

export default authSlice.reducer
