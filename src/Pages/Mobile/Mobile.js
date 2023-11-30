import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated import
import SignIn from '../../components/SignIn/SignIn/SignIn';
import Signout from '../../components/Signout/Signout';
import Dashboard from '../Dashboard/Dashboard';
import Proposals from '../Proposals/Proposals';
import Listing from '../Listing/Listing';
import FutureFeatures from '../../components/FF/FF';

const Mobile = () => {
  return (
    <div className='mobile'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='futurefeature' element={<FutureFeatures/>}/>
          <Route path='/proposals' element={<Proposals />} />
          <Route path='/job-listing' element={<Listing />} />
          <Route path='/logout' element={<Signout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Mobile;
