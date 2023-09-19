import { createSlice } from "@reduxjs/toolkit"

import { accountService } from "@/_Services/accountService";

const initialState = {
    isError: null,
    isNetworkError: false,
    isSuccess: false,
    isLoading: false,
    token: accountService.getToken(),
    rememberMe: false,
}

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isError = null
            state.isNetworkError = false
            state.isSuccess = false
            state.isLoading = false
            state.token = null
            state.rememberMe = false
        },

        isRememberMe: (state, action) => {
            state.rememberMe = action.payload
        },

        setToken: (state, action) => {
            state.token = action.payload
        },
    },

}

)