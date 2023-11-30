import ViewModal from '../ViewModal/ViewModal'
import logo from '../../assets/logo/CreateUlogo.png'
import pfp from '../../assets/user.JPG'

const NavBar = () => {
    return ( 
        <div className='dashboard__top'>
                <ViewModal />
                <img className='dashboard__top-logo' src={logo} alt='company star swirl logo' />
                <img className='dashboard__top-userpfp' src={pfp} alt='user uploaded' />
            </div>
     );
}
 
export default NavBar;