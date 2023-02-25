import React, { useState } from 'react';

const UseStateTrial = () => {
const [word,setWord ] = useState('New Word Title');
const clickHandler = () =>{
  if(word === 'New Word Title'){
    setWord('New Word Title Invoked')
  }else if(word === 'New Word Title Invoked'){
    setWord('Shifting Titles')
  }else{
    setWord('New Word Title')
  }
}

return (
  <>
  <h1>{word}</h1>
  <button type="button" className="btn" onClick = {clickHandler} >Change Title</button>
  
  </>
)
}

export default UseStateTrial;
