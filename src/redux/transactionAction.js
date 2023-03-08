import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const addTransactionAction = createAsyncThunk("add/transaction", async (tdata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/transactions", tdata)
        // console.log(data);
    } catch (error) {

    }
})
export const subAmountAction = createAsyncThunk("sub/amount", async (userId, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/transactions${userId}`)
        console.log(data, "sub");
        return data
    } catch (error) {

    }
})
export const transactionAction = createAsyncThunk("transaction", async (amount, { rejectWithValue, getState }) => {
    try {
        console.log(amount, "uyghg");
        const { data } = await axios.put(`http://localhost:5000/users/${amount.id}`, amount)
        console.log(data, "jjjjjjjjjjjjjj");
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export default addTransactionAction 