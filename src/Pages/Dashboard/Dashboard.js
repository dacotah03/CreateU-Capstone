import '../Dashboard/Dashboard.scss'
import add from '../../assets/icons/🦆 icon _plus_.png'
import notify from '../../assets/icons/🦆 icon _bell outline_.png'
import pfp2 from '../../assets/user2.JPG';
import { useNavigate } from 'react-router'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/proposals')
    }
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div className='dashboard'>
            <NavBar/>
            <div className='dashboard__header'>
                <h1 className='dashboard__header-text'>Dashboard</h1>
            </div>
            <div className='dashboard__nav'>
                <div className='dashboard__nav-buttons'>
                    <button className='dashboard__nav-buttons-select'>Dashboard</button>
                    <button className='dashboard__nav-buttons-unselected' onClick={handleClick}>Proposals</button>
                </div>
                <img className='dashboard__nav-add' src={add} alt='plus symbol' />
            </div>
            <div className='dashboard__stats'>
                <div className='dashboard__stats-trending'>
                    <h3 className='dashboard__stats-trending-header'>Trending Creators</h3>
                    <div className='dashboard__stats-trending-background'>
                        <p className='dashboard__stats-trending-background-user'>#Creator1</p>
                    </div>
                    <div className='dashboard__stats-trending-background'>
                        <p className='dashboard__stats-trending-background-user'>#Creator2</p>
                    </div>
                    <div className='dashboard__stats-trending-background'>
                        <p className='dashboard__stats-trending-background-user'>#Creator3</p>
                    </div>
                    <div className='dashboard__stats-trending-background'>
                        <p className='dashboard__stats-trending-background-user'>#Creator4</p>
                    </div>
                    <div className='dashboard__stats-trending-background'>
                        <p className='dashboard__stats-trending-background-user'>#Creator5</p>
                    </div>
                    <div className='dashboard__stats-trending-achievements'>
                        <h3 className='dashboard__stats-trending-achievements-header'>Achievements</h3>
                    </div>
                </div>
                <div className='dashboard__stats-charts'>
                    <div className='dashboard__stats-charts-placeholder'></div>
                    <button className='dashboard__stats-charts-notify'> Notify Me
                        <img className='dashboard__stats-charts-notify-icons' src={notify} alt='bell symbol' onClick={toggleModal} /></button>
                </div>
            </div>
            <div className='dashboard__user'>
                <h2 className='dashboard__user-header'>Connects</h2>
                <div className='dashboard__user-pfps'>
                    <img className='dashboard__user-pfps-user' src={pfp2} alt='user profile pic' />
                    <img className='dashboard__user-pfps-user' src={pfp2} alt='user profile pic' />
                    <img className='dashboard__user-pfps-user' src={pfp2} alt='user profile pic' />
                    <img className='dashboard__user-pfps-user' src={pfp2} alt='user profile pic' />
                    <img className='dashboard__user-pfps-user' src={add} alt='plus symbol' />
                </div>
            </div>
            <div className='dashboard__earnings'>
                <div className='dashboard__earnings-placeholder'>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;