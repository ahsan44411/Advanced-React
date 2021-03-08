import React, { useState, } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return <section>
    <h3>Prop Drilling</h3>
    <List people={people} />
  </section>
  return <h2>prop drilling</h2>;
};

const List = ({ people }) => {
  return <>
    {people.map((person) => {
      return <SinglePerson key={person.id} />;
    })}
  </>
}

const SinglePerson = ({ id, name }) => {
  return <div className="item">
    <h4>Sungle Item</h4>
  </div>
}

export default PropDrilling;
