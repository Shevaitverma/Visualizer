import React, { useState, useEffect } from 'react';
import { dataService } from './services/dataService';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    //fetch data logic 
    setData(dataService())
  },[])
  console.log(data);
  
  return (
    <div>
      <h1>Dashboard</h1>
    
    </div>
  );
}

export default App;