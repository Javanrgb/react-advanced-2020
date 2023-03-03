import React, { useState } from 'react';

const UseStateObject = () => {
 const [person,setPerson] = useState({
  name:'John',
  age:30,
  message:'Hello guys'
})
const[name,setName] = useState('Peter')
const[age,setAge] = useState(30)
const[message,setMessage] = useState('Hello')
const myHandler=()=>{
setPerson({...person, message:'The new message'})
setMessage('Hello and welcome')
}

  return(
    <>
    <h2>{name}</h2>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button name='btn' onClick={myHandler}>Change Message</button>
    </>
  )
   

};

export default UseStateObject;
