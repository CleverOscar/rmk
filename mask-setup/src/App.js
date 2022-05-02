import React, {useState} from 'react';
import Navbar from './views/Navbar'
import Wallet from './views/Wallet';
import {ethers} from 'ethers';

function App() {

  const [data, setData] = useState({});

  const checkBrowser = () => {
    if(window.ethereum ){
      console.log("Browser supports web3");
    } else {
      console.log("Browser does not support web3");
    }
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className='container mx-auto'>      
        <Wallet web3={checkBrowser}/>
      </div>

    </div>
  );
}

export default App;


// 