import menu from '../../assets/icons/🦆 icon _menu_.png'
import pfp from '../../assets/user.JPG'
import search from '../../assets/icons/🦆 icon _search outline_.png'
import '../Proposals/Proposals.scss'
import ViewModal from '../../components/ViewModal/ViewModal'
import { Navigate, useNavigate} from 'react-router-dom'

const Proposals = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/dashboard')
    }
    return ( 
        <div className='proposals'>
        <div className='proposals__top'>
           <ViewModal/>
            <img className='proposals__top-userpfp' src={pfp}/>
        </div>
        <div className='proposals__header'>
            <h1 className='proposals__header-text'>Proposals</h1>
        </div>
        <div className='proposals__nav'>
            <div className='proposals__nav-buttons'>
            <button className='proposals__nav-buttons-unselected' onClick={handleClick}>Dashboard</button>
            <button className='proposals__nav-buttons-select'>Proposals</button>
            </div>
            <img className='proposals__nav-search'src={search}/>
        </div>
            <section className='proposals__main'>
                <div className='proposals__main-approved'>
                    <div className='proposals__main-approved-header'>
                        <h2>Approved</h2>
                    </div>
                    <div className='proposals__main-approved-listing'>
                    <div className='proposals__main-approved-listing-job'>
                        <div className='proposals__main-approved-listing-job-jobs'>
                            <p className='proposals__main-approved-listing-job-jobs-company'>Mielle Organics</p>
                            <div className='proposals__main-approved-listing-job-jobs-earnings'>
                            <p className='proposals__main-approved-listing-job-jobs-earnings-text'>Earnings</p>
                            <p className='proposals__main-approved-listing-job-jobs-earnings-amount'>$500.00</p>
                            </div>
                        </div>
                        <div className='proposals__main-approved-listing-job-jobs'>
                            <p className='proposals__main-approved-listing-job-jobs-company'>Amazon</p>
                            <div className='proposals__main-approved-listing-job-jobs-earnings'>
                            <p className='proposals__main-approved-listing-job-jobs-earnings-text'>Earnings</p>
                            <p className='proposals__main-approved-listing-job-jobs-earnings-amount'>$1500.50</p>
                            </div>
                        </div>
                        <div className='proposals__main-approved-listing-job-jobs'>
                            <p className='proposals__main-approved-listing-job-jobs-company'>OhmySenpai</p>
                            <div className='proposals__main-approved-listing-job-jobs-earnings'>
                            <p className='proposals__main-approved-listing-job-jobs-earnings-text'>Earnings</p>
                            <p className='proposals__main-approved-listing-job-jobs-earnings-amount'>$200.00</p>
                            </div>
                        </div>
                </div>
                    <div className='proposals__main-rejected'>
                         <div className='proposals__main-rejected-header'>
                            <h2>Rejcted</h2>
                         </div>
                                <div className='proposals__main-rejected-listing-job-jobs'>
                            <p className='proposals__main-rejected-listing-job-jobs-company'>Apple</p>
                            <div className='proposals__main-rejected-listing-job-jobs-earnings'>
                            <p className='proposals__main-rejected-listing-job-jobs-earnings-text'>Earnings</p>
                            <p className='proposals__main-rejected-listing-job-jobs-earnings-amount'>$0.00</p>
                                </div>
                            </div>
                            <div className='proposals__main-pending'>
                                <div className='proposals__main-pending-header'>
                                    <h2>Pending</h2>
                                </div>
                                <div className='proposals__main-pending-listing-job-jobs'>
                            <p className='proposals__main-pending-listing-job-jobs-company'>Target</p>
                            <div className='proposals__main-pending-listing-job-jobs-earnings'>
                            <p className='proposals__main-pending-listing-job-jobs-earnings-text'>Earnings</p>
                            <p className='proposals__main-pending-listing-job-jobs-earnings-amount'>$2,000.00</p>
                                </div>
                            </div>
                            <div className='proposals__main-pending-listing-job-jobs'>
                            <p className='proposals__main-pending-listing-job-jobs-company'>Brainstation</p>
                            <div className='proposals__main-pending-listing-job-jobs-earnings'>
                            <p className='proposals__main-pending-listing-job-jobs-earnings-text'>Earnings</p>
                            <p className='proposals__main-pending-listing-job-jobs-earnings-amount'>$200.00</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
     );
}
 
export default Proposals;