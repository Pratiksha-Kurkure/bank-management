import React from 'react'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
export default function Protected({ element }) {
    const { login } = useSelector(state => state.allusers)
    return login ? element : <Navigate to="/login" />
}
