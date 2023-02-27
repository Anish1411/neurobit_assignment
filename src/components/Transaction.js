import { Button, Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import "./Transaction.css";
import { FormControl, Select, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import uuid from 'react-uuid';

export const Transaction = ({ transaction }) => {
    const [selected, setSelected] = useState('');
    const [selected2, setSelected2] = useState('');
    const [arr1,setarr1]=useState([]);
    const [arr2,setarr2]=useState([]);
    const [Item, setItem] = useState([]);
    const [Item2, setItem2] = useState([]);
    const [channel, setChannel] = useState({ first:null, second:null})
    const [channelArr, setChannelArr] = useState([]);
    let arr=[];

    const list=()=>channelArr.map((item,arr)=> 
    {}
    );

    const selectionChangeHandler = (event) => {
        setSelected(event.target.value);
        setarr1([...Item,event.target.value]);
        setChannel({...channel, first:event.target.value})
    };
    const selectionChangeHandler2 = (event) => {
        setSelected2(event.target.value);
        setarr2([...Item2,event.target.value]);
        setChannel({...channel, second:event.target.value})
    };
    const additem=(event)=>{
        setItem([...Item,arr1]);
        setItem2([...Item2,arr2]);
      
        setChannelArr(prev => [...prev, {
            ...channel,
            id:uuid()
        }]);

        const sze=channelArr.length;
    }

    const handleDeleteChannel = indi => {
    setChannelArr(prev => { return prev.filter(ele => 
        ele.id !== indi)});
    }
    return (
        <Box className="channel-Box">
            <h3 className='channel-name'> {transaction}</h3>

            <FormControl>
                <InputLabel>Channel</InputLabel>
                <Select className='menu' value={selected} onChange={selectionChangeHandler}>
                    <MenuItem value={'C1'}>C1</MenuItem>
                    <MenuItem value={'C2'}>C2</MenuItem>
                    <MenuItem value={'C3'}>C3</MenuItem>
                    <MenuItem value={'C4'}>C4</MenuItem>
                    <MenuItem value={'C5'}>C5</MenuItem>
                </Select>
                <div className='div-1' style={{display:"flex", justifyContent:"space-evenly"}}>


                    {
                        channelArr?.map((ele, ind)=>(
                            
                        <div  className='div-2' style={{display:"flex" ,alignItems:"center", marginTop:0} } key={ind } id={ind}>
                            <h2>{ele.first}</h2> 
                            <h2>{ele.second}</h2>
                            <button onClick={()=>{
                                handleDeleteChannel(ele.id)
                            }}> Delete</button>
                            </div>))
                    }
                </div>
            </FormControl>
            <FormControl>
                <InputLabel>Values</InputLabel>
                <Select className='menu' value={selected2} onChange={selectionChangeHandler2}>
                      <MenuItem value={'A1'}>A1</MenuItem>
                    <MenuItem value={'A2'} >A2</MenuItem>

                </Select>
            </FormControl>
            <Button className='btn-addchannel' onClick={additem}>+ Add Channels </Button>

        </Box>

    )
}