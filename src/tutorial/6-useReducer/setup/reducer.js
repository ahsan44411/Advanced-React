export const reducer = (state, action) => {
    const newPeople = [...state.people, action.payload]
    console.log(action.type)
    if (action.type === 'ADD_ITEM') {
        return { ...state, people: newPeople, isModalOpen: true, modalContent: "item added" };
    };
    if (action.type === 'No_Value') {
        return { ...state, isModalOpen: true, modalContent: 'Please Enter Value' };
    }
    if (action.type === "CLOSE_MODAL") {
        return { ...state, isModalOpen: true, modalContent: 'please enter value' };
    }
    if (action.type === "REMOVE_ITEM") {
        const newPeople = state.people.filter((person) => person.id !== action.payload);
        return { ...state, people: newPeople };
    }

    throw new Error('no matching action type')
}


