import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
      ],
      error:null,
      loading :true,
  }


  // Create context
export const GlobalContext = createContext(initialState);


export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(AppReducer,initialState);


    // ACTIONS
    const addtransaction=async(transaction)=>{
    
      try{
        console.log(`transaction length :${transaction.length}`);
        const sze=transaction.length;
          
          dispatch({
              type:'ADD_TRANSACTION',
              payload:transaction
              // payload:newtransaction

          })
          
  
      }catch(err){
          dispatch({
              type: 'TRANSACTION_ERROR',
              payload: err.response.data.error
            });
      }
     
  }

return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    addtransaction,
    error:state.error,
    loading:state.loading,
    
  }}>
    {children}
  </GlobalContext.Provider>);

}