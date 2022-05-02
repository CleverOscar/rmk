import React from 'react';
import Navbar from './views/Navbar'
import Wallet from './views/Wallet';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className='container mx-auto'>      
        <Wallet/>
      </div>

    </div>
  );
}

export default App;


// 