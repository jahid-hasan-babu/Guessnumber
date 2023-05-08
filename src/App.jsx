import React, { useState } from 'react'
import './App.css'
const App = () => {
const  [value, setvalue] = useState(0);
const [msg, setmsg] = useState(0);
const [count, setcount] = useState(0);

const getvalue = (e) => setvalue(e.target.value);

function getRandomInt(){
  const randomDecimal = Math.random();
  
  const scaleDecimal = randomDecimal * 10 + 1;

  const randomInt = Math.floor(scaleDecimal);

  return randomInt;
}

const retry = (e) => {
  e.preventDefault();
  setcount(0);
  setmsg(0);
}

const handleSubmit = (e) =>{
  e.preventDefault();
  setcount((prev) => prev + 1);
  const random = getRandomInt();
  if(parseInt(value) === random){
    setmsg(1);
  } else {
    setmsg(2);
  }
}
  return (
    <div className='maindiv'>
      <h2>Guess the lucky number 1 - 10</h2>
      <h1 className="red">
        {" "}
        {count === 3 && "Bad luck you have the 3 times. Please try again"}
      </h1>
      <h1 className="red">
        {" "}
        {msg === 2 && "SORRY! your guess is wrong"}
      </h1>
      <h1 className="green">
        {" "}
        {msg === 1 && "Hurrah! your guess is correct"}
      </h1>
      <div className="from">
        <form>
          <input type="number" onChange={getvalue} placeholder='Guess the number'/><br/>
          <button onClick={handleSubmit} disabled={count === 3}>Submit</button> <br />
        {count === 3 && (
          <button className='reset' onClick={retry}>Reset</button>
        )}
  
        </form>
      </div>
    </div>
  )
}

export default App
