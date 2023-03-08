import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllUsers from './pages/admin/AllUsers'
import AllUsersNew from './pages/admin/AllUsersNew'
import Register from './pages/admin/Register'
import AdminOnly from './pages/AdminOnly'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import Protected from './pages/Proctected'
import Account from './pages/user/Account'
import Cpassword from './pages/user/Cpassword'
import History from './pages/user/History'
import Transaction from './pages/user/Transaction'

export default function App() {
  return <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      {/* admin */}
      <Route path='/register' element={<AdminOnly element={<Register />} />} />
      <Route path='/allusersnew' element={<AdminOnly element={<AllUsersNew />} />} />
      {/* <Route path='/alluser' element={<AllUsers />} /> */}
      {/* <Route path='/allusersnew' element={<AllUsersNew />} /> */}


      {/* user */}
      {/* <Route path='/account' element={<Account />} /> */}
      <Route path='/account' element={<Protected element={<Account />} />} />
      <Route path='/history' element={<Protected element={<History />} />} />
      <Route path='/transaction' element={<Protected element={<Transaction />} />} />
      <Route path='/cpassword' element={<Protected element={<Cpassword />} />} />
    </Routes>
  </BrowserRouter>
}
