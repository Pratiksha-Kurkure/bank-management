import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import addTransactionAction, { subAmountAction, transactionAction } from '../../redux/transactionAction'

export default function Transaction() {
  const { login } = useSelector(state => state.allusers)
  const { transactionAdded, transactionSub } = useSelector(state => state.transactions)
  const [logAmount, setlogAmount] = useState(login)
  const dispatch = useDispatch()
  const [sendAmount, setsendAmount] = useState({
    tName: "XXX",
    tAccnum: "78945612396",
    tAmount: "100",

  })

  useEffect(() => {
    // dispatch(subAmountAction())
  }, [logAmount, transactionAdded])
  const TransactionFun = e => {
    dispatch(addTransactionAction(sendAmount))
    dispatch(transactionAction({ ...logAmount, amount: logAmount.amount - sendAmount.tAmount }))
    dispatch(transactionAction(userId))
  }
  return <>
    {/* {JSON.stringify(sendAmount,2,null)} */}
    <div className="container">
      <div className="row">

        <div className="col-sm-6 offset-3" >
          {transactionSub && <h2>Total Balance={transactionSub.amount}</h2>}
          <div class="card">
            <div class="card-header bg-black text-white">Money-Transfer</div>
            <div class="card-body">
              <div>
                <div>
                  <label for="name" class="form-label">Transfer To</label>
                  <input type="text" class="form-control" id="name"
                    placeholder="transfer to"
                    value={sendAmount.tName}
                    onChange={e => setsendAmount({ ...sendAmount, tName: e.target.value })} />
                </div>
                <div>
                  <label for="name" class="form-label">Account No</label>
                  <input type="text" class="form-control" id="name"
                    placeholder="account no"
                    value={sendAmount.tAccnum}
                    onChange={e => setsendAmount({ ...sendAmount, tAccnum: e.target.value })} />
                </div>
                <div>
                  <label for="name" class="form-label">Amount</label>
                  <input type="text" class="form-control" id="name"
                    placeholder="amount"
                    value={sendAmount.tAmount}
                    onChange={e => setsendAmount({ ...sendAmount, tAmount: e.target.value })} />
                </div>

                <br />
                <button type="button" class="btn btn-dark w-100 mt-10" onClick={e => TransactionFun()}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
