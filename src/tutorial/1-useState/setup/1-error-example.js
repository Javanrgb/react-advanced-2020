import React,{useState,useEffect} from 'react';



const ErrorExample = () => {
  let title= 'Random Title';

  const handleClick = () =>{
    console.log(title);
  }
  return <>
  <h3>{title}</h3>
  <button typpe="button" className="btn" onClick={handleClick} >Change Title</button>
  </>
};

export default ErrorExample;
