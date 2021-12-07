import React, { useContext, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Grid } from '@mui/material';
import { DecoContext } from '../../App';
import { render } from '@testing-library/react';
import NativeSelect from '@mui/material/NativeSelect';




const DecoBox = ({ cakes, id, cakeDecoState, cakeDecor, array }) => {

    const [arrayAddOne, setArrayAddOne] = useState([]);
    const [arrayAddTwo, setArrayAddTwo] = useState([]);
    const [arrayAddThree, setArrayAddThree] = useState([]);
    const [arrayAddFour, setArrayAddFour] = useState([]);
    const [decoCount, setDecoCount,] = useState(0);
    const [arrayAdded, setArrayAdded,] = useState([0, 0, 0, 0, 0]);
    const { dropDownProp } = useContext(DecoContext);
    const [dropDownCount, setDropDownCount] = dropDownProp;
    // const [decoRow, setDecoRow] = decoRowProp;

    // const [decoRow, setDecoRow] = useState([]);
    let { decoration } = cakes;
    const { img, name, count } = cakeDecor;
    const decoArray = [];
    for (let i = 0; i <= decoration; i++) {
        decoArray.push(i)
    }

    const handleDecoCount = (e) => {
        setDecoCount(e.target.value)

        const newArr = [...dropDownCount, Number(e.target.value)];
        // console.log(newArr);
        setDropDownCount(newArr);
        // let countArr = cakeDecor["count"];
        // setArrayAdd(countArr)
        // console.log(arrayAdd);

        let totalarrayOne = [...arrayAddOne];
        let totalarrayTwo = [...arrayAddTwo];
        let totalarrayThree = [...arrayAddThree];
        let totalarrayFour = [...arrayAddFour];
        let totalarray = [...totalarrayOne, ...totalarrayTwo, ...totalarrayThree, ...totalarrayFour];
        let arrayName = (e.target.name);
        let arrayValue = (e.target.value);
        let arrayy = [...arrayAdded];

        for (let i = 0; i <= 20; i++) {

            if (i === Number(arrayName)) {
                arrayy[i] = Number(arrayValue);
                if (Number(arrayName) === 1) {

                    totalarrayOne.push(Number(arrayValue));
                }
                else if (Number(arrayName) === 2) {

                    totalarrayTwo.push(Number(arrayValue));
                }
                else if (Number(arrayName) === 3) {

                    totalarrayThree.push(Number(arrayValue));
                }
                else if (Number(arrayName) === 4) {

                    totalarrayFour.push(Number(arrayValue));
                }
            }
        }

        // arrayy.map((items) => {
        //     if (items !== 0) {
        //         totaldecoArr.push(items);

        //     }
        // })
        // console.log(+totalarray);


        console.log(totalarrayOne);
        console.log(totalarrayTwo);
        console.log(totalarrayThree);
        console.log(totalarrayFour);
        // console.log(+totalarray);
        // let total = totalDecOne + totalDecTwo + totalDecThree + totalDecFour;
        // setArrayAdded(arrayy);
        // setArrayAddOne(totalDec)
        // console.log(arrayy);
        // console.log(totalDecOne);
        console.log(arrayy);
        // console.log(e.target.name);
        e.preventDefault();
    }
    cakeDecor["count"] = decoCount;
    array.push(cakeDecor.count);






    return (

        <div >
            <Container key={id} style={{ display: 'flex', marginBottom: '2rem' }}>
                <Grid item xs={12} sm={12} md={12} >
                    <img
                        style={{ width: '40px', height: '50px', marginBottom: 10 }}
                        src={img}
                        alt=''
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    {name}
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <FormControl

                        sx={{ m: 1, minWidth: 120 }} style={{ border: 'none' }}>

                        <Select
                            name={id}
                            value={decoCount}
                            onChange={e => handleDecoCount(e)}

                            style={{ border: 'none' }} native id="grouped-native-select">
                            <optgroup >
                                {
                                    decoArray.map((dec, i) => <option
                                        key={i}
                                        value={dec}
                                    >{dec}</option>)

                                }
                            </optgroup>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <FormControl sx={{ m: 1, minWidth: 120 }} style={{ border: 'none' }}>

                        <Select style={{ border: 'none' }} native defaultValue="" id="grouped-native-select">

                            <optgroup >
                                <option value={0}>Blue</option>
                            </optgroup>


                        </Select>
                    </FormControl>

                </Grid>
            </Container>

        </div>


    );
};

export default DecoBox;