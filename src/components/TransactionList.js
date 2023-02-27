import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';
export const TransactionList = () => {
    const {transactions,addtransaction}=useContext(GlobalContext);
    const channelsdata = JSON.parse(localStorage.getItem("channels"));
    console.log(` store in the local storage : ${channelsdata}`);


useEffect(()=>{
  console.log(`use effect and channelsdata : ${channelsdata} and length : ${channelsdata.length}`);
  addtransaction(channelsdata);
  
},[])


    return (
      <>
      <h3>History</h3>
      <ul className="list">
      {transactions.map((transaction)=>
        <Transaction key={transaction.id} transaction={transaction}/>
      )}
      </ul>
      </>
    )
}