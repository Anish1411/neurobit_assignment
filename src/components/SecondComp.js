import React, { useState } from 'react';
import "../App.css";
import { FormControl, Select, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { TransactionList } from './TransactionList';
import { Link } from 'react-router-dom';

function SecondComp() {
    const [selected, setSelected] = useState('');

    const selectionChangeHandler = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div className="App">

            <div className='flex-container-1'>

                <h1 className='react-test'> React Test</h1>
                <hr className='hr'></hr>
                <div className='content-option'>
                    <div className='left-bar-content'>
                        <WidgetsIcon className='left-bar-icons' />
                        <p className='content'>Dashboard</p>
                    </div>
                    <div className='left-bar-content Montages'>
                        <WidgetsIcon className='left-bar-icons' />
                        <p className='content'>Montages</p>
                    </div>
                    <div className='left-bar-content'>
                        <WidgetsIcon className='left-bar-icons' />
                        <p className='content'>Credits</p>
                    </div>
                </div>
                <div className='left-bottom-content'>
                    <h1 className='credits'>1,650</h1>
                    <p className='credits-para'>Total Credits Available</p>
                </div>

            </div>

            <div className='flex-container-2'>

                <div className='Top-content'>
                    <h2 className='Oura_study'>Oura_Study</h2>
                    <div className='user_info'>
                        <AccountCircleIcon className='user_icon' />
                        <FormControl>
                            <InputLabel>User</InputLabel>
                            <Select value={selected} onChange={selectionChangeHandler}>
                                <MenuItem value={1}>Anish</MenuItem>
                                <MenuItem value={2}>Ram</MenuItem>
                                <MenuItem value={3}>Aman</MenuItem>
                                <MenuItem value={4}>Gautam</MenuItem>
                                <MenuItem value={5}>Harsh</MenuItem>
                            </Select>
                            <FormHelperText>Select From Users</FormHelperText>
                        </FormControl>
                    </div>

                </div>

                <div className='steps'>
                    <div className='step-1 number'>
                        <p className='num color-border'>1</p>
                        <p className='step-name'>Upload EDFs</p>
                    </div>
                    <div className='step-2 number'>
                        <p className='num'>2</p>
                        <p className='step-name'>Map Channels</p>
                    </div>
                    <div className='step-3 number'>
                        <p className='num'>3</p>
                        <p className='step-name'>Save & Preview</p>
                    </div>
                </div>

                <div>
                    <TransactionList />
                </div>

                <div className='footer'>
                    <div className='left-footer'>
                        <button className='Back btn'>Back</button>
                        <button className='cancel-montage btn'>Cancel Montage</button>
                    </div>
                    <div className='right-footer'>
                        <Link to="/next">
                            <button className='Next btn' id='myButton' >Next</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SecondComp;
