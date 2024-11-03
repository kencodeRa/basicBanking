import React, { useState } from 'react'

const Deposit = ({balance, setBalance}) => {
  const [deposit, setDeposit] =  useState("")

  const handleInput = (e)=>{
    setDeposit(e.target.value);
  }
  const handleClick = (e) =>{

    e.preventDefault();
    setBalance((prevBalance)=>Number(balance) + Number(deposit));
    setDeposit("");
  }
  return (
     <div className='box-container'>
      <form action="#" onSubmit={handleClick}  className='form-container'>
        <label className='form-label'>Deposit Money
        </label>
        <input
              className='form-input'
              placeholder='Amount'
              type='number'
              value={deposit} 
              onChange={handleInput}

            />
            <input
              className='form-button' 
              type="submit" 
              value="Withdraw"
              onClick={handleClick}
              />
      </form>
    </div>
  )
}

export default Deposit
