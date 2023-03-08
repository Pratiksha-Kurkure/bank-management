import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePasswordAction } from '../../redux/userAction'

export default function Cpassword() {
    const dispatch = useDispatch()
    const { login } = useSelector(state => state.allusers)

    const [userData, setuserData] = useState(login)
    const changePasword = e => {
        e.preventDefault()
        dispatch(changePasswordAction(userData))
    }

    return <>
        <div className="container ">
            <form onSubmit={changePasword} className='text-center text-black bold'>
                <h3 className='  text-center font-bold'>Change Password</h3>
                <div>
                    <label for="name" class="form-label">Old Pasword</label>
                    <input type="text" class="form-control center-block w-50"
                        id="name" placeholder="Enter Your Name"
                        value={login.password}
                    />
                </div>
                <div>
                    <label for="name" class="form-label">New Password</label>
                    <input type="text" class="form-control w-50 center-block"
                        id="name" placeholder="Enter Your Name"
                        onChange={e => setuserData({ ...userData, password: e.target.value })} />
                </div>

                <br />
                <button type="submit" class="btn btn-dark w-50 center-block">Update Password</button>
            </form>
        </div>

    </>
}
