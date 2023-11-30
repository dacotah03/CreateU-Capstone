import React, { useState, useEffect } from 'react';
import '../Listing/Listing.scss';
import search from '../../assets/icons/🦆 icon _search outline_.png';
import NavBar from '../../components/NavBar/NavBar';

const Listing = () => {
    const [jobs, setJobs] = useState([]);
    const [modal, setModal] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
     
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await fetch('http://localhost:8080/jobs');
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleSearch = (event) => {
        setSearchKeyword(event.target.value);
    };

  
    const filteredJobs = jobs.filter(
        (job) =>
            job.Title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            job.Tag.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className='listing'>
            <NavBar />
            <div className='listing__nav'>
                <img src={search} alt='magnifying glass' className='listing__nav-search' />
                <input
                    className='listing__nav-text'
                    type='textbox'
                    placeholder='Input Keyword'
                    value={searchKeyword}
                    onChange={handleSearch}
                />
            </div>
            <section className='listing__main'>
                {filteredJobs.map((job) => (
                    <div className='listing__main-info' key={job.id} onClick={toggleModal}>
                        <div className='listing__main-info-job'>
                            <p className='listing__main-info-job-company'>{job.Title}</p>
                            {modal && <div className='listing__main-info-content'>{job.Header}</div>}
                        </div>
                        <div className='listing__main-comp'>
                            <p className='listing__main-comp-text'>Compensation</p>
                            <p className='listing__main-comp-amount'>{job.Comp}</p>
                        </div>
                        <div className='listing__main-text'>
                            <div className='listing__main-text-title'>
                                <p>{job.Header}</p>
                            </div>
                            <div className='listing__main-text-description'>
                                <p>{job.Description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Listing;
