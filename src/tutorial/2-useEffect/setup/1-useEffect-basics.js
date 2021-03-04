import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(1)

  useEffect(()=> {
    console.log("Ran Use Effect");
    document.title = `New Messages ${value}`;
  })
  console.log("render Component");
  
  return <> 
  <h2>useEffect Basics</h2>
  
  <button className="btn" onClick={() => {setValue(value+1)}}>Increase</button>

  <h1>{value}</h1>
  
  </>

};

export default UseEffectBasics;
