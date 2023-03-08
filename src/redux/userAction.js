import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const addUserAction = createAsyncThunk("add/user", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/users", userData)
    } catch (error) {

    }
})
export const getUserAction = createAsyncThunk("get/user", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/users")
        return data
    } catch (error) {
        console.log(error);
    }
})
export const updateUserAction = createAsyncThunk("update/user", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.put(`http://localhost:5000/users/${userData.id}`, userData)
        return data
    } catch (error) {
        console.log(error);
    }
})
export const deleteUserAction = createAsyncThunk("delete/user", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.delete(`http://localhost:5000/users/${userData.id}`)
        return data
    } catch (error) {
        console.log(error);
    }
})
export const loginUserAction = createAsyncThunk("login/user", async (loginUser, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/users`)
        console.log(data, "data");
        console.log(loginUser, "loginuser");
        const result = data.find(item => item.name == loginUser.name && item.password == loginUser.password)
        console.log(result, "res");
        if (result) {
            localStorage.setItem("login", JSON.stringify(result))
            return result
        } else {
            return rejectWithValue("email or password wrong")
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const changePasswordAction = createAsyncThunk("update/password", async (newPassword, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.put(`http://localhost:5000/users/${newPassword.id}`,newPassword)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export default addUserAction