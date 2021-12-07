import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CakeBox from '../CakeBox/CakeBox';
import Deco from '../Deco/Deco';
import DecoBox from '../DecoBox/DecoBox';
import Shop from '../Shop/Shop';
import d from '../../img/d1.png'
import dd from '../../img/d2.png'
import ddd from '../../img/d3.png'
import dddd from '../../img/d4.png'
import Footer from '../Footer/Footer';



const cakeSize = [
    {
        id: 11,
        img: "https://clipartbarn.com/wp-content/uploads/2017/09/Birthday-cake-clipart-2.jpeg",
        size: 6,
        people: "4 - 6",
        price: "£29.95",
        decoration: 6,



    },
    {
        id: 22,
        img: "https://clipartbarn.com/wp-content/uploads/2017/09/Birthday-cake-clipart-2.jpeg",
        size: 8,
        people: "10 - 12",
        price: "£49.95",
        decoration: 9,


    },
    {
        id: 33,
        img: "https://clipartbarn.com/wp-content/uploads/2017/09/Birthday-cake-clipart-2.jpeg",
        size: 9,
        people: "12 - 15",
        price: "£59.95",
        decoration: 13,



    },
    {
        id: 44,
        img: "https://clipartbarn.com/wp-content/uploads/2017/09/Birthday-cake-clipart-2.jpeg",
        size: 10,
        people: " 18 - 20",
        price: "£69.95",
        decoration: 16,



    },
    {
        id: 55,
        img: "https://clipartbarn.com/wp-content/uploads/2017/09/Birthday-cake-clipart-2.jpeg",
        size: "13 - 18",
        people: "40 - 50",
        price: "£97.95",
        decoration: 35,



    },
]


const cakeDeco = [

    {
        id: 1,
        img: `${d}`,
        name: "flower",
        count: 0
    },
    {
        id: 2,
        img: `${dd}`,
        name: "Heart",
        count: 0
    },
    {
        id: 3,
        img: `${ddd}`,
        name: "Star",
        count: 0
    },
    {
        id: 4,
        img: `${dddd}`,
        name: "Bird",
        count: 0
    },
]
let array = []
const CakeSize = () => {
    const [cakeDecoState, setCakeDecoState] = useState([]);

    const [cakes, setCakes] = useState([]);
    const handleClick = (cake) => {

        setCakes(cake);

    }

    useEffect(() => {
        setCakeDecoState(cakeDeco);
    }, [])

    // console.log(cakeDecoState);
    return (
        <div>
            <h3 style={{ marginLeft: '7rem' }}>Red Velvet Cake</h3>
            <Shop
                cakes={cakes}
            >

            </Shop>
            <Container >
                <Grid container spacing={2} >
                    {
                        cakeSize.map(cake => <CakeBox

                            key={cake.id}
                            cake={cake}
                            handleClick={handleClick}


                        ></CakeBox>)
                    }


                </Grid>
            </Container>
            <Deco
                cakes={cakes}
            >

            </Deco>
            <Grid>
                {
                    cakeDecoState.map(cakeDecor => <DecoBox

                        key={cakeDecor.id}
                        id={cakeDecor.id}
                        cakeDecor={cakeDecor}
                        cakes={cakes}
                        array={array}


                    ></DecoBox>)
                }

                {/* <DecoBox
                    cakes={cakes}
                >

                </DecoBox> */}
                {/* <DecoBox
                    cakeDecoState={cakeDecoState}
                    cakes={cakes}
                ></DecoBox> */}


            </Grid>

        </div>
    );
};

export default CakeSize;