import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Please Enter Value",
};

const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    if (name) {
      console.log('k bro')
      const newItem = { id: new Date().toDateString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'No_Value' });
    }
  }
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  return <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
    {state.people.map((person) => {
      return (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: person.id })}>Remove Item</button>
        </div>
      )
    })}
  </>;
};

export default Index;
