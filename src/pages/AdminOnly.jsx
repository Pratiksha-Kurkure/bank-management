import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AdminOnly({element}) {
    const {login} = useSelector(state => state.allusers)
  return login && login.admin ? element : <Navigate to="/login"/> 
  
}
