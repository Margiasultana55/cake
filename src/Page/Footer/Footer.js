import { Container } from '@mui/material';
import React from 'react';

const Footer = ({ cakes }) => {
    const { decoration } = cakes;
    return (
        <div>
            <Container style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
                <div>
                    <h3>Total:</h3>
                </div>
                <div>
                    <h5 style={{ marginRight: '10rem' }}>0/{decoration}</h5>

                </div>
            </Container>
        </div>
    );
};

export default Footer;