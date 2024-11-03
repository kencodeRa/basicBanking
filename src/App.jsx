import './App.css'
import Deposit from './components/Deposit';
import Navbar from './components/Navbar'
import Withdraw from './components/Withdraw'
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(1000);

  return (
    
    <>
    <Navbar balance={balance} />
    <Deposit balance={Number(balance)} setBalance={setBalance}/>
    </>
  )
}

export default App
