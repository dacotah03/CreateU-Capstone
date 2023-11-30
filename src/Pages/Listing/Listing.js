import '../Listing/Listing.scss'
import search from '../../assets/icons/🦆 icon _search outline_.png'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'

const Listing = () => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div className='listing'>
           <NavBar/>
            <div className='listing__nav'>
                <img src={search} alt='magnifying glass' className='listing__nav-search' />
                <input className='listing__nav-text' type='textbox' placeholder='Input Keyword'></input>
            </div>
            <section className='listing__main'>
                <div className='listing__main-info' onClick={toggleModal}>
                    <div className='listing__main-info-job'>
                        <p className='listing__main-info-job-company'>Mielle Organics</p>
                        {modal && (
                            <div className='listing__main-info-content'>Testing</div>
                        )}
                    </div>
                    <div className='listing__main-comp'>
                        <p className='listing__main-comp-text'>Compensation</p>
                        <p className='listing__main-comp-amount'>$450.00</p>
                    </div>
                    <div className='listing__main-text'>
                        <div className='listing__main-text-title'>
                            <p>Looking for Hair Influencers!</p>
                        </div>
                        <div className='listing__main-text-description'>
                            <p>Looking for Hair Influencers with type 3 and down hair to use and promote at least 3 products from our new mango tusili line of products </p>
                        </div>
                    </div>
                </div>
                <div className='listing__main-info'>
                    <div className='listing__main-info-job'>
                        <p className='listing__main-info-job-company'>Apple</p>
                    </div>
                    <div className='listing__main-comp'>
                        <p className='listing__main-comp-text'>Compensation</p>
                        <p className='listing__main-comp-amount'>$2000.00</p>
                    </div>
                    <div className='listing__main-text'>
                        <div className='listing__main-text-title'>
                            <p>Looking for Tech Influencers!</p>
                        </div>
                        <div className='listing__main-text-description'>
                            <p>Looking for Tech Influencers with 50K+ following to promote our new line of Macbooks</p>
                        </div>
                    </div>
                </div>
                <div className='listing__main-info'>
                    <div className='listing__main-info-job'>
                        <p className='listing__main-info-job-company'>FashionNova</p>
                    </div>
                    <div className='listing__main-comp'>
                        <p className='listing__main-comp-text'>Compensation</p>
                        <p className='listing__main-comp-amount'>$1,000.00</p>
                    </div>
                    <div className='listing__main-text'>
                        <div className='listing__main-text-title'>
                            <p>Looking for Plus Size Influencers!</p>
                        </div>
                        <div className='listing__main-text-description'>
                            <p>Looking for Influencers with clothing sizing between 16-24 to promote our new FashionNova Curve line!</p>
                        </div>
                    </div>
                </div>
                <div className='listing__main-info'>
                    <div className='listing__main-info-job'>
                        <p className='listing__main-info-job-company'>HoneyBear Inc</p>
                    </div>
                    <div className='listing__main-comp'>
                        <p className='listing__main-comp-text'>Compensation</p>
                        <p className='listing__main-comp-amount'>$200.00</p>
                    </div>
                    <div className='listing__main-text'>
                        <div className='listing__main-text-title'>
                            <p>Looking for Gaming Influencers!</p>
                        </div>
                        <div className='listing__main-text-description'>
                            <p>Looking for gaming content creators to promote A new FPS game on both twitch and youtube platforms</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Listing;