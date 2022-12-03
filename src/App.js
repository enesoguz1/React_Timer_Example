import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if(timeOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else{
      clearInterval(interval)
    }

    return() => clearInterval(interval)

  }, [timeOn])

  return (
    <div className="App my-3">
      <div className='my-4'>
        <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 100) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timeOn && time === 0 &&(
          <button className='btn btn-success m-1' onClick={() => setTimeOn(true)}>Başlat</button>
        )}
        {timeOn &&(
          <button className='btn btn-danger m-1' onClick={() => setTimeOn(false)}>Durdur</button>
        )}
        {!timeOn && time !== 0 &&(
          <button className='btn btn-secondary m-1' onClick={() => setTimeOn(true)}>Devam et</button>
        )}
        {!timeOn && time > 0 &&(
          <button className='btn btn-danger m-1' onClick={() => setTime(0)}>Sıfırla</button>
        )}
      </div>
    </div>
  
  );
}

export default App;
