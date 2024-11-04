import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({balance  }) => {
  
  return (
    <div>
        <header>
            <nav className='navbar'>
                <div className='logo'> Save<span>C<FontAwesomeIcon icon={faCoins} />in</span></div>  
                <div className='balance-container'>
                  <div className='balance'>Php {balance}</div>
                </div>
            </nav>
        </header>
      
    </div>
  )
}

export default Navbar
