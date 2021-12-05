import React from 'react';
import CakeBuy from '../CakeBuy/CakeBuy';
import CakeSize from '../CakeSize/CakeSize';

const Cake = () => {
    return (
        <div>
            <CakeSize></CakeSize>
            <CakeBuy></CakeBuy>
        </div>
    );
};

export default Cake;