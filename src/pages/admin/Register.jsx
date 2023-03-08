import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import addUserAction from '../../redux/userAction'

export default function Register() {
    const initialValues = {
        name: "john",
        email: "john@gmail.com",
        address: "Aurangabad",
        phone: "7666784920",
        photo: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        accountno: "789456123698",
        amount: "2000",
        password: "",
        admin: false
    }
    const [userData, setuserData] = useState(initialValues)
    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(addUserAction(userData))
    }
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form onSubmit={handelSubmit}>
                        <div class="card mt-5 mb-5">
                            <div class="card-header bg-black text-white">Register</div>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">First name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={userData.name}
                                        onChange={e => setuserData({ ...userData, name: e.target.value })}
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>

                                <div class="mt-2">
                                    <label for="address" class="form-label">Address</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="address"
                                        value={userData.address}
                                        onChange={e => setuserData({ ...userData, address: e.target.value })}
                                        placeholder="Enter Your address"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label"> Email</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        value={userData.email}
                                        onChange={e => setuserData({ ...userData, email: e.target.value })}
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="phone" class="form-label">Contact No</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="phone"
                                        value={userData.phone}
                                        onChange={e => setuserData({ ...userData, phone: e.target.value })}
                                        placeholder="Enter Your phone"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="profile" class="form-label">profile</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="profile"
                                        value={userData.photo}
                                        onChange={e => setuserData({ ...userData, photo: e.target.value })}
                                        placeholder="Enter Your profile"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="accountno" class="form-label">Account No</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="accountno"
                                        value={userData.accountno}
                                        onChange={e => setuserData({ ...userData, accountno: e.target.value })}
                                        placeholder="Enter Your accountno"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="accountno" class="form-label">Amount</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="accountno"
                                        value={userData.amount}
                                        onChange={e => setuserData({ ...userData, amount: e.target.value })}
                                        placeholder="Enter Your accountno"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>

                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="password"
                                        value={userData.password}
                                        onChange={e => setuserData({ ...userData, password: e.target.value })}
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a password.</div>
                                </div>

                                <button type="submit" class="btn btn-dark w-100 mt-3">
                                    Register
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
}
