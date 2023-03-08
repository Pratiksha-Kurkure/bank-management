import { createSlice } from "@reduxjs/toolkit"
import addTransactionAction, { subAmountAction, transactionAction } from "./transactionAction"

const transactionSlice = createSlice({
    name: "transactions",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTransactionAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addTransactionAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.transactionAdded = state.transactionAdded?false: true
            })
            .addCase(addTransactionAction.rejected, (state, { payload }) => {
                state.loading = false
                state.addTransactionError = payload
            })
            .addCase(transactionAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(transactionAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.transactionSub = payload
            })
            .addCase(transactionAction.rejected, (state, { payload }) => {
                state.loading = false
                state.amountError = payload
            })
            .addCase(subAmountAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(subAmountAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.transactionHistory = payload
            })
            .addCase(subAmountAction.rejected, (state, { payload }) => {
                state.loading = false
                state.getError = payload
            })
            

    }

})
export default transactionSlice.reducer