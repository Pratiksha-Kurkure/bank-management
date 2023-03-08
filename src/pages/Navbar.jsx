import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logout} from '../redux/userSlice'

export default function Navbar() {
    const {login} = useSelector(state => state.allusers)
    const dispatch=useDispatch()

    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"> Bank-Application</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link " to="/">Home</Link>
                         {/* user */}
                         {
                            login && !login.admin 
                            ? <> <div className='d-flex justify-content-between'> <Link class="nav-link" to="account">Account-Details</Link>
                            <Link class="nav-link" to="history">Transaction-History</Link>
                            <Link class="nav-link" to="transaction">Money-Transfer</Link>
                            <Link class="nav-link" to="cpassword"> Password</Link>
                            <img src={login.photo} height={50} width={50} className="rounded-circle ms-2 me-3" alt="" /><span className='text-white mt-2 me-3'>{login.name}</span>
                            <button type="button" class="btn btn-outline-danger" onClick={e => dispatch(logout())}>Logout</button></div></>
                            :"Unothrorised Access"
                        }
                        {/* admin */}
                        {
                            login && login.admin 
                            ? <><div className='d-flex'><Link class="nav-link" to="register">Register</Link>
                            <Link class="nav-link" to="allusersnew">AllUsers</Link></div>
                            <button type="button" class="btn btn-outline-danger" onClick={e => dispatch(logout())}>Logout</button></>
                            :"Unothrorised Access"
                        }
                        
                       
                               
                    </div>
                </div>
            </div>
        </nav>
    </>
}
