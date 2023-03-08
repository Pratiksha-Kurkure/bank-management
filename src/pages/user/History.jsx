import axios from 'axios'

import React, { useEffect } from 'react'
import { useState } from 'react'

export default function History() {
  const [alldata, setalldata] = useState([])
  const getTransaction = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/transactions")
      setalldata(data);
    } catch (error) {

    }
  }
  useEffect(() => {
    getTransaction()
  }, [])
  return <>
    <table class="table table-dark table-striped table-hover mt-5">
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">To</th>
          <th scope="col">Account number</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>

        {
          alldata.map((item, index) => <>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.tName}</td>
              <td>{item.tAccnum}</td>
              <td>{item.tAmount}</td>
            </tr>
          </>)}


      </tbody>
    </table>
  </>

}

