import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return <>
        <img
            src="https://tse3.mm.bing.net/th?id=OIP.vHp-z7v248clBcV8K_AOhQHaD4&pid=Api&P=0"
            className=" w-100 h-50 position-relative " alt="" />
        <button type="button" className="btn btn-dark position-absolute top-50 start-50 mt-100"><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></button>
    </>
}
