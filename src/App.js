import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import Nav from './Nav';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className='App'>
      <div className='Main'>
        <Nav accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className='Stars'>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
    </div>
  );
}

export default App;
