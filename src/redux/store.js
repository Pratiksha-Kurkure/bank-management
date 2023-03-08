import { configureStore } from "@reduxjs/toolkit"
import transactionSlice from "./transactionSlice"
import userSlice from "./userSlice"

const store = configureStore({
    reducer: {
        allusers: userSlice,
        transactions: transactionSlice
    }
})
export default store