import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [peoples, setPeoples] = useState(data);

  const clickHandler = () => {
    setPeoples([]);
  }

  const removeItem = (id) => {
    let newPeoples = peoples.filter((people) => people.id !== id);
    setPeoples(newPeoples);
  }

  return <>
    {
      peoples.map((people) => {
        const {id, name} = people;
        return (<div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>Remove this item</button>
        </div>
        );
      })
    }
    <button className="btn" onClick={clickHandler}>Clear items</button>
  </>;
};

export default UseStateArray;
