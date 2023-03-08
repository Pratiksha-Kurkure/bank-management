import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction, getUserAction, updateUserAction } from '../../redux/userAction'

export default function AllUsersNew() {
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

        <table class="table table-dark table-striped table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">Account No.</th>
              <th scope="col">Profile</th>
              <th scope="col">Name</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map(item => <>
                <tr>
              <th scope="row">{item.accountno}</th>
              <td><img src={item.photo} className="rounded-circle" height="60" width="60" /></td>
              <td>{item.name}</td>
              <td><button type="button"
                                        onClick={e => {
                                            setUserDetail(item)
                                            setshow(false)
                                        }}
                                        class="btn btn-primary">Details</button></td>
            </tr>
            </>)}
            
            
          </tbody>
        </table>
        <div className="col-sm-4 offset-4 mb-5">
        {
                        userDetail && <div class="border  p-4 bg-dark text-white">
                            <div className=" d-flex justify-content-between border-bottom  pb-3">
                            <h3 >Details</h3>
                            <div>
                                <button type="button" class="btn btn-warning " onClick={e => setshow(true)}
                                data-bs-toggle="modal" data-bs-target="#updateModal"
                                >Edit</button>
                                <button type="button" class="btn btn-outline-danger ms-3 " onClick={e => {setshow(true)
                                dispatch(deleteUserAction(userDetail))}}
                                >Delete</button>
                                </div>
                            </div>

                            
                            <div class="card-body ">
                                <img src={userDetail.photo} alt="" className="rounded my-5 mx-auto d-block" height="80" width="80"  />
                                <pre>
                                <h5> <strong>    Name        :  </strong> {userDetail.name}</h5>
                                <h5> <strong>    Address     :  </strong> {userDetail.address}</h5>
                                <h5> <strong>    Email       :  </strong> {userDetail.email}</h5>
                                <h5> <strong>    Contact     :  </strong> {userDetail.phone}</h5>
                                <h5> <strong>    Account No  :  </strong> {userDetail.accountno}</h5>
                                <h5> <strong>    Balance     :  </strong> {userDetail.accountno}</h5>
                                </pre>
                            </div>
                        </div>
                    }
       </div>

            {/* update Modalwindow */}
            
            <div class="modal fade " id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title " id="exampleModalLabel">Update User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body bg-dark">
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
                                            <div className="d-flex mt-3 btn-group " role="group">
                                            <button type="submit" class="btn btn-warning">
                                                Update
                                            </button>
                                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </form>
                        </> : ""
                    }
                  </div>
                  
                </div>
              </div>
            </div>






        
    </>
}
