import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    console.log(bottle);
    return (
        <div className='bottle'>
            <h2>Bottle: {name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;