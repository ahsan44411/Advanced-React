import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('random title');
  
  const clickHandler = () => {
    if (text === 'random title'){
      setText('Hello World');
    }else{
      setText('random title');
    }
    
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>Change Name</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
