import React, { useState } from 'react' 

const Withdraw = ({balance, setBalance}) => {
    const [withdraw, setWithdraw] = useState();

    const handleInput =(e)=>{
      setWithdraw(e.target.value);
    }
    const handleClick = (e) =>{

      e.preventDefault();
      
      if(balance >= withdraw){
        setBalance((prevBalance) => balance - withdraw)
        setWithdraw("")
        
      }else{
        alert("Insufficient balance")
      }
      
    }

  return (
    <div className='box-container'>
      <form action="#" onSubmit={handleClick}  className='form-container'>
        <label className='form-label'>Withdraw Money
        </label>
        <input
              className='form-input'  
              placeholder='Amount'
              type='number'
              value={withdraw} 
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

export default Withdraw
