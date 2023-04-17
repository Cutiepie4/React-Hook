import React from 'react';

function LaptopDetail(props) {

    const { listLaptops } = props;

    return (
        <div>
            {listLaptops.map((item) => {
                return (
                    <div>{item.id} {item.name}</div>
                )
            })}
        </div>
    );
}

export default LaptopDetail;