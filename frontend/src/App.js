import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';

function App() {
  const [predictionMarket, setPredictionMarket] = useState(undefined);
  const [myBets, setMyBets] = useState(undefined);


 useEffect(() => {
  const init = async () => {
    const { signerAddress, predictionMarket } await getBlockchain();
  }
  
   init();
 }, []);


  return (
    <div>Hello!</div>
  );
}

export default App;
