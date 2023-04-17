import { useState } from 'react';
import LaptopDetail from './LaptopDetail';
import LaptopInput from './LaptopInput';

function Test(props) {

    const [listLaptops, setListLaptops] = useState([
        {
            id: 'id01',
            name: 'Asus'
        },
        {
            id: 'id02',
            name: 'Acer'
        },
    ]);

    const addNewLaptop = (laptop) => {
        setListLaptops([...listLaptops, laptop]);
    }

    return (
        <div>
            <LaptopInput addNewLaptop={addNewLaptop} />
            <hr />
            <LaptopDetail listLaptops={listLaptops} />
        </div>
    );
}

export default Test;