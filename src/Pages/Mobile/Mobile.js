import React from 'react';
import SignIn from '../../components/SignIn/SignIn/SignIn';
import Logout from '../../components/SignIn/Logout/logout';
// Move this import statement to the top

const Mobile = () => {
    return ( 
        <div className='mobile'>
            <SignIn />
            <Logout/>
        </div>
    );
}
 
export default Mobile;