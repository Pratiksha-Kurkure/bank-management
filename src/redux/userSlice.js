import { createSlice } from "@reduxjs/toolkit"
import addUserAction, { changePasswordAction, deleteUserAction, getUserAction, loginUserAction, updateUserAction } from "./userAction"
const localLoginData = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : null
const userSlice = createSlice({
    name: "users",
    initialState: { users: [], login: localLoginData },
    reducers: {
        // removeUserAdded(state) {
        //     state.userAdded = false
        // },
        // resetLoginError(state) {
        //     state.employeeLoginError = undefined
        // },
        logout(state) {
            localStorage.removeItem("login")
            state.login = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userAdded = state.userAdded ? false : true
            })
            .addCase(addUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.userAddError = payload
            })
            .addCase(getUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(getUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.employeeAddError = payload
            })
            .addCase(updateUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.updated = state.updated ? false : true
            })
            .addCase(updateUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.employeeUpdateError = payload
            })
            .addCase(deleteUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.deleted = true
            })
            .addCase(deleteUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.employeedeleteError = payload
            })
            .addCase(loginUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(loginUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.login = payload
            })
            .addCase(loginUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.employeeLoginError = payload
            })
            .addCase(changePasswordAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(changePasswordAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.updatePassword = state.updatePassword ? false : true
            })
            .addCase(changePasswordAction.rejected, (state, { payload }) => {
                state.loading = false
                state.changePasswordError = payload
            })

    }

})
export default userSlice.reducer
export const { logout } = userSlice.actions