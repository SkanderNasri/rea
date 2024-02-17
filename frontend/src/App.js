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

  return (
    <>
      <h1>My Website</h1>
      <h3>My Name is Skander</h3>
    </>
  );
}

export default App;
