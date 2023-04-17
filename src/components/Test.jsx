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

    const deleteLaptop = (laptop) => {
        setListLaptops(listLaptops.filter((item) => {
            return item !== laptop;
        }))
    }

    return (
        <div>
            <LaptopInput addNewLaptop={addNewLaptop} />
            <hr />
            <LaptopDetail listLaptops={listLaptops} deleteLaptop={deleteLaptop} />
        </div>
    );
}

export default Test;