import React, { useState } from 'react';

const UseStateObject = () => {
 const [person,setPerson] = useState({
  name:'John',
  age:30,
  message:'Hello guys'
})
const myHandler=()=>{
setPerson({...person, message:'The new message'})

}

  return(
    <>
    <h2>{person.name}</h2>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button name='btn' onClick={myHandler}>Change Message</button>
    </>
  )
   

};

export default UseStateObject;
