import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction, updateUserAction } from '../../redux/userAction'

export default function AllUsers() {
    const { users, userAdded, updated } = useSelector(state => state.allusers)
    const [userDetail, setUserDetail] = useState()
    const [show, setshow] = useState(false)
    const dispatch = useDispatch()
    const handelUpdateSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUserAction(userDetail))
        setshow(false)
        setUserDetail(false)
    }
    useEffect((e) => {
        // e.preventDefault()
        dispatch(getUserAction())
    }, [userAdded, updated])
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">Users
                            <button type="button" class="btn btn-danger" onClick={e => setshow(false)}>close</button>
                        </div>
                        <div class="card-body">
                            {
                                users.map(item => <>
                                    <h4>{item.name}</h4>
                                    <button type="button"
                                        onClick={e => {
                                            setUserDetail(item)
                                            setshow(false)
                                        }}
                                        class="btn btn-primary">View</button></>
                                )
                            }
                        </div>

                    </div>
                </div>
                <div className="col-sm-4">
                    {
                        userDetail && <div class="card">
                            <div class="card-header d-flex justify-content-between">Details
                                <button type="button" class="btn btn-primary " onClick={e => setshow(true)}
                                >Edit</button>


                            </div>
                            <div class="card-body">
                                <img src="" alt="" />
                                <h6>Name:{userDetail.name}</h6>
                                <h6>Address:{userDetail.address}</h6>
                                <h6>Email:{userDetail.email}</h6>
                                <h6>Contact:{userDetail.number}</h6>
                                <h6>Account No:{userDetail.accnum}</h6>
                            </div>
                        </div>
                    }
                </div>
                <div className="col-sm-5">
                    {
                        show ? <>
                            <form onSubmit={handelUpdateSubmit}>
                                {
                                    userDetail && <div class="card">
                                        <div class="card-header">Update User Form</div>
                                        <div class="card-body">
                                            <div>
                                                <label for="name" class="form-label">First name</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    value={userDetail.name}
                                                    onChange={e => setUserDetail({ ...userDetail, name: e.target.value })}
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
                                                    value={userDetail.address}
                                                    onChange={e => setUserDetail({ ...userDetail, address: e.target.value })}
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
                                                    value={userDetail.email}
                                                    onChange={e => setUserDetail({ ...userDetail, email: e.target.value })}
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
                                                    value={userDetail.phone}
                                                    onChange={e => setUserDetail({ ...userDetail, phone: e.target.value })}
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
                                                    value={userDetail.photo}
                                                    onChange={e => setUserDetail({ ...userDetail, photo: e.target.value })}
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
                                                    value={userDetail.accountno}
                                                    onChange={e => setUserDetail({ ...userDetail, accountno: e.target.value })}
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
                                                    value={userDetail.password}
                                                    onChange={e => setUserDetail({ ...userDetail, password: e.target.value })}
                                                    placeholder="Enter Your Password"
                                                />
                                                <div class="valid-feedback">Looks good!</div>
                                                <div class="invalid-feedback">Please choose a password.</div>
                                            </div>
                                            <div class="mt-2">
                                                <label for="cpassword" class="form-label"
                                                >Confirm Password</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="cpassword"
                                                    value={userDetail.cpassword}
                                                    onChange={e => setUserDetail({ ...userDetail, cpassword: e.target.value })}
                                                    placeholder="Confirm Your Password"
                                                />
                                                <div class="valid-feedback">Looks good!</div>
                                                <div class="invalid-feedback">
                                                    Please Recheck Your Password.
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                                Update
                                            </button>

                                        </div>
                                    </div>
                                }

                            </form>
                        </> : ""
                    }
                </div>
            </div>
        </div>
    </>
}
