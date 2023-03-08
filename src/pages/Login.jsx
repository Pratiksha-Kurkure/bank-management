import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json, useNavigate } from 'react-router-dom'
import { loginUserAction } from '../redux/userAction'

export default function Login() {
    const { login } = useSelector(state => state.allusers)
    const navigate = useNavigate()
    const [loginUser, setloginUser] = useState({
        name: "",
        password: 123
    })
    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUserAction(loginUser))
    }
    useEffect(() => {
        if (login) {
            login.admin ? navigate("/register") : navigate("/account")
        }
        // loginError
    })
    return <>
        {/* {JSON.stringify(loginUser)} */}
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form action="" onSubmit={handelSubmit}>
                        <div class="card">
                            <div class="card-header bg-dark text-white" >Login</div>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        onChange={e => setloginUser({ ...loginUser, name: e.target.value })}
                                        placeholder="Enter Your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Enter Your Password"
                                        onChange={e => setloginUser({ ...loginUser, password: e.target.value })}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" class="btn btn-dark w-100 mt-3">
                                    Login
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
