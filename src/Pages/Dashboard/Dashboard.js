import React, { useState, useEffect } from 'react';
import '../Dashboard/Dashboard.scss';
import add from '../../assets/icons/🦆 icon _plus_.png';
import notify from '../../assets/icons/🦆 icon _bell outline_.png';
import pfp2 from '../../assets/user2.JPG';
import { useNavigate } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import { UserData } from '../../components/Data/Data';
import BarChart from '../../components/Chart/Chart';
import { chartData } from '../../components/Data/Data';
import chart1 from '../../assets/bar.jpg';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/proposals');
    };

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    // const charts = [
    //     {
    //         labels: chartData.map((data) => data.Day),
    //         datasets: [
    //             {
    //                 label: 'Post Interaction',
    //                 data: chartData.map((data) => data['12a']),
    //             },
    //         ],
    //     },
    // ];

    // const [currentChart, setCurrentChart] = useState(charts[0]);
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.inter),
        datasets: [{
          label: "Employee",
          data: UserData.map((data) => data.inter),
          backgroundColor: ["red","blue","green"]
        }]
      })
    // useEffect(() => {
    //     return () => {
    //     }

    // },[]);

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
                <div className='dashboard__stats-charts-placeholder'>
                    <img className='dashboard__stats-charts-placeholder-2' src={chart1}/>
                    {/* <BarChart chartData={currentChart} /> */}
                </div>
                <button
                    // className='dashboard__stats-charts-notify'
                    // onClick={() => {
                    //     setCurrentChart(charts[1]); // Switch to the next chart
                    //     toggleModal(); // Open the modal after switching the chart (if needed)
                    // }}
                >
                    Notify Me
                    <img className='dashboard__stats-charts-notify-icons' src={notify} alt='bell symbol' />
                </button>
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