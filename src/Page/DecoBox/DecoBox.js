import React, { useContext, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Grid } from '@mui/material';
import { DecoContext } from '../../App';





const DecoBox = ({ cakes, cakeDecor, id }) => {
    const [decoCount, setDecoCount] = useState(0);
    const { dropDownProp } = useContext(DecoContext);
    const [dropDownCount, setDropDownCount] = dropDownProp;
    // const [decoRow, setDecoRow] = decoRowProp;
    const [decoRow, setDecoRow] = useState([]);
    let { decoration } = cakes;
    const { img, name } = cakeDecor;
    const decoArray = [];
    for (let i = 0; i <= decoration; i++) {
        decoArray.push(i)
    }
    const handleDecoCount = (e) => {
        setDecoCount(e.target.value)

        const newArr = [...dropDownCount, Number(e.target.value)];
        console.log(newArr);
        setDropDownCount(newArr);
    }
    cakeDecor["count"] = decoCount;

    // setDecoRow([...decoRow, cakeDecor]);
    console.log(cakeDecor);

    return (

        <div >
            <Container style={{ display: 'flex', marginBottom: '2rem' }}>
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
                    <FormControl sx={{ m: 1, minWidth: 120 }} style={{ border: 'none' }}>

                        <Select onChange={(e) => handleDecoCount(e)}
                            value={decoCount}
                            style={{ border: 'none' }} native id="grouped-native-select">
                            <optgroup>
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
            {/* <Footer
                cakes={cakes}
            ></Footer> */}

        </div>


    );
};

export default DecoBox;