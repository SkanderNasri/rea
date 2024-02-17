import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


function App() {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    getNames();
  }, [])


  // Async call, we should handle the promises  
  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data);
  }

  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  



  return (
    <>
      <h1>My Website</h1>
      <h3>My Name is {userName}</h3>
      <button onClick={handleClick1}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h3>{counter}</h3>
    </>
  );
}

export default App;