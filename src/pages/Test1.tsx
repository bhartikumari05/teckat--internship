import React, { useState } from 'react'

const Test1 = () => {
    const[val, setval]=
    useState(0);
  return (
    <>
    <h1></h1>
    <button
    onClick= {()=> {setval(val+1)}}
    
    
    
    
    
    >click{val}</button>
    <div>Test1</div>
    </>
    
  )
}

export default Test1