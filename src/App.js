import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { FormControl, Select, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Upload from './components/Upload';
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <FirstComp />
          </>
          } />
        </Routes>


        <Routes>
          <Route path="/uploaded" exact element={<>
            <GlobalProvider>
             
              <div className="container">
                <SecondComp/>
                
              </div>
            </GlobalProvider>
          </>
          } />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
