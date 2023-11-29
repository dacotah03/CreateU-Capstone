import { useState } from "react";
import menu from '../../assets/icons/🦆 icon _menu_.png'
import close from '../../assets/icons/🦆 icon _close outline_.png'
import { useNavigate } from "react-router";
import '../ViewModal/ViewModal.scss'

const MenuModal = ({classNm, setMenu}) => {

  const handleMenu = (event) => {
    event.preventDefault()
  }
  const navigate = useNavigate();
    const handleBrowse = () =>{
        navigate('/job-listing')
    }
    const navigate2 = useNavigate();
    const handleDashboard = () =>{
        navigate2('/dashboard')
    }
    const navigate3 = useNavigate();
    const handleProposals = () =>{
        navigate3('/proposals')
    }
    const navigate4 = useNavigate();
    const handleSign = () =>{
        navigate4('/')
    }
    const navigate5 = useNavigate();
    const handleFuture = () =>{
        navigate5('/futurefeatures')
    }
    
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  return ( 
    <div className="viewmodal">
      <img src={menu} onClick={toggleModal}/>
      {modal && (
        <div className="viewmodal__main">
        <h1>Menu</h1>
        <div className="viewmodal__main-tabs">
          <p onClick={handleBrowse}>Browse Opportunities</p>
          <p onClick={handleFuture}> My Connects</p>
          <p onClick={handleDashboard}>Dashboard</p>
          <p onClick={handleProposals}>Proposals</p>
          <p onClick={handleFuture}>Future Features</p>
          <p onClick={handleFuture}>Settings</p>
          <p onClick={handleSign}>Sign Out</p>
        </div>
        
        <img src={close} onClick={toggleModal}/>
        </div>
      )}
    </div>
   );
}
 
export default MenuModal;