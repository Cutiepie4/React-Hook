import React, { useState } from 'react';

function LaptopInput(props) {

    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const { addNewLaptop } = props;

    const changeNameInput = (event) => {
        setName(event.target.value);
    }

    const changeIdInput = (event) => {
        setId(event.target.value);
    }

    return (
        <div>
            <label>Id:</label>
            <input type="text" onChange={changeIdInput} value={id} />
            <br />
            <label>Name:</label>
            <input type="text" onChange={changeNameInput} value={name} />
            <br />
            <button onClick={addNewLaptop({ id: id, name: name })}>Add</button>
        </div>
    );
}

export default LaptopInput;