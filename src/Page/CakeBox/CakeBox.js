import { Grid, Typography } from '@mui/material';
import * as React from 'react';

import './CakeBox.css'



const CakeBox = ({ cake, handleClick }) => {
    const { img, size, people } = cake;
    return (
        <div>

            <div onClick={() => handleClick(cake)} className='cake cake-btn'>
                <Grid item xs={12} sm={5} md={2} className='cakee' >

                    <img
                        style={{ width: '40px', height: '50px', marginBottom: 10 }}
                        src={img}
                        alt=''

                    />
                    <Typography className='text' variant="button" display="block" color='gray' gutterBottom>
                        {size}" Cake
                    </Typography>
                    <Typography className='textt' variant="button" display="block" color='gray' gutterBottom>
                        {people} people
                    </Typography>

                </Grid>

            </div>

        </div>
    );
};

export default CakeBox;