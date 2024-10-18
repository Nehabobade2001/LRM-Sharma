import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    error: [],
    _persistedAt: null, // Initialize the timestamp
};

export const UserSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        IsLoading: (state, action) => {
            state.isLoading = true;
        },
        SetUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.error = null;
            state._persistedAt = Date.now(); // Set the timestamp when the user is set
        },
        RemoveUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state._persistedAt = null; // Clear the timestamp on logout
        },
        adderrors: (state, action) => {
            state.error.push(action.payload);
        },
        removeErrors: (state) => {
            state.error = [];
        },
    },
});

export const { SetUser, RemoveUser, adderrors, removeErrors } = UserSlice.actions;

export default UserSlice.reducer;
