import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Grid from "./Components/Grid";
function App() {
  const [time,setTime] = useState(0);
  const startTimer = () =>{
     setInterval(()=>{setTime((prev)=>prev+1)},1000);
  }
  return (
    <div>
      <Button className='btn btn-success' style={{marginLeft:"45.8rem",marginTop:"5px",width:"80px"}} onClick={startTimer}>Start</Button>
      <span id="timer">Time : {time} sec</span>
      <Grid/>
      </div>
  );
}

export default App;
