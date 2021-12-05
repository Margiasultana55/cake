import React from 'react';

const Shop = ({ cakes }) => {
    const { size, price } = cakes;
    return (
        <div>
            <h3 style={{ marginLeft: '7rem', color: 'gray' }}>{price}</h3>
            <h3 style={{ marginLeft: '7rem', color: 'gray' }}>Cake Size: {size}"</h3>
        </div>
    );
};

export default Shop;