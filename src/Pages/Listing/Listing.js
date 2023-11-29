import '../Listing/Listing.scss'
import menu from '../../assets/icons/🦆 icon _menu_.png'
import pfp from '../../assets/user.JPG'
import search from '../../assets/icons/🦆 icon _search outline_.png'
import logo from '../../assets/logo/CreateUlogo.png'
import { navigate, useNavigate } from 'react-router'

const Listing = () => {

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/dashboard')
    }
    return ( 
        <div className='listing'>
            <div className='listing__top'>
                <img className='listing__top-menu' src={menu}/>
                <img className='listing__top-logo' src={logo} onClick={handleClick}/>
                <img className='listing__top-userpfp' src={pfp}/>
            </div>
            <div className='listing__nav'>
                <img src={search} className='listing__nav-search'/>
                <input className='listing__nav-text' type='textbox' placeholder='Input Keyword'></input>
            </div>
            <section className='listing__main'>
                <div className='listing__main-info'>
                    <div className='listing__main-info-job'>
                    <p className='listing__main-info-job-company'>Mielle Organics</p>
                </div>
                    </div>
                <div className='listing__main-comp'>
                    <p className='listing__main-comp-text'>Compensation</p>
                    <p className='listing__main-comp-amount'>$450.00</p>
                </div>
            </section>
        </div>
     );
}
 
export default Listing;