import React from 'react';

const Deco = ({ cakes }) => {
    const { decoration } = cakes;
    return (
        <div>
            <div style={{ marginLeft: '7rem' }}>
                <h2>Decorations</h2>
                <h4 style={{ color: 'gray', }}>Max {decoration}, $0.60 each</h4>
            </div>

        </div>
    );
};

export default Deco;