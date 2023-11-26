import '../Dashboard/Dashboard.scss'
import menu from '../../assets/icons/🦆 icon _menu_.png'
import pfp from '../../assets/user.JPG'

const Dashboard = () => {
    return ( 
        <div className='dashboard'>
            <div className='dashboard__top'>
                <img className='dashboard__top-menu' src={menu}/>
                <img className='dashboard__top-userpfp' src={pfp}/>
            </div>
        </div>
     );
}
 
export default Dashboard;