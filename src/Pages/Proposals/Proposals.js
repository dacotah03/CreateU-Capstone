import menu from '../../assets/icons/🦆 icon _menu_.png'
import pfp from '../../assets/user.JPG'
import add from '../../assets/icons/🦆 icon _plus_.png'
import '../Proposals/Proposals.scss'

const Proposals = () => {
    return ( 
        <div className='proposals'>
        <div className='proposals__top'>
            <img className='proposals__top-menu' src={menu}/>
            <img className='proposals__top-userpfp' src={pfp}/>
        </div>
        <div className='proposals__header'>
            <h1 className='proposals__header-text'>Proposals</h1>
        </div>
        <div className='proposals__nav'>
            <div className='proposals__nav-buttons'>
            <button className='proposals__nav-buttons-unselected'>Dashboard</button>
            <button className='proposals__nav-buttons-select'>Proposals</button>
            </div>
            <img className='proposals__nav-add'src={add}/>
        </div>
        </div>
     );
}
 
export default Proposals;