import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated import
import SignIn from '../../components/SignIn/SignIn/SignIn';
import Signout from '../../components/Signout/Signout';
import Dashboard from '../Dashboard/Dashboard';
import Proposals from '../Proposals/Proposals';

const Mobile = () => {
  return (
    <div className='mobile'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/proposals' element={<Proposals/>} />
          <Route path='/logout' element={<Signout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Mobile;
