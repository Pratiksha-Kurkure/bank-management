import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../../redux/userAction'

export default function Account() {
    const { login } = useSelector(state => state.allusers)

    return <div>

        <div className="container ">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header"> Account Details
                        </div>
                        <div class="card-body">
                            <img src={login.photo} alt="" className="rounded-circle my-2 mx-auto d-block" height="80" width="80" />
                            <pre>
                            <h6>Name      : {login.name}</h6>
                            <h6>Address   : {login.address}</h6>
                            <h6>Email     : {login.email}</h6>
                            <h6>Contact   : {login.phone}</h6>
                            <h6>Account No: {login.accountno}</h6>
                            <h6>Account No: {login.amount}</h6>
                            </pre>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
