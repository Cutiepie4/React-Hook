import React, { useState } from 'react';

function LaptopInput(props) {

    const [name, setName] = useState('');
    const [id, setId] = useState('');


    const changeNameInput = (event) => {
        setName(event.target.value);
    }

    const changeIdInput = (event) => {
        setId(event.target.value);
    }

    return (
        <div>
            <label>Id:</label>
            <input type="text" value={id} onChange={changeIdInput} />
            <br />
            <label>Name:</label>
            <input type="text" value={name} onChange={changeNameInput} />
            <br />
            <button onClick={() => {
                if (name !== '' && id !== '') {
                    props.addNewLaptop({ id: id, name: name });
                    setName('');
                    setId('');
                }
            }}>Add</button>
        </div>
    );
}

export default LaptopInput;