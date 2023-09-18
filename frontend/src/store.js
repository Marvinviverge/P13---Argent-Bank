import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "@/_Features/authSlice";
import { userSlice } from "@/_Features/userSlice";

export const store = configureStore({
    reducer: {
        Auth: authSlice.reducer,
        User: userSlice.reducer,
    }
})