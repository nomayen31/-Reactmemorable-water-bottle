import React from 'react';

const Bottle = ({bottle}) => {
    const {name} = bottle;
    console.log(bottle);
    return (
        <div>
            <h2>Bottle:{name}</h2>
        </div>
    );
};

export default Bottle;