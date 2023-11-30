import { useState } from "react";
import menu from '../../assets/icons/🦆 icon _menu_.png'
import menu2 from '../../assets/icons/menu-2.jpg'
import { useNavigate } from "react-router";
import '../ViewModal/ViewModal.scss'

const MenuModal = ({ classNm, setMenu }) => {

  const navigate = useNavigate();
  const handleBrowse = () => {
    navigate('/job-listing')
  }
  const navigate2 = useNavigate();
  const handleDashboard = () => {
    navigate2('/dashboard')
  }
  const navigate3 = useNavigate();
  const handleProposals = () => {
    navigate3('/proposals')
  }
  const navigate4 = useNavigate();
  const handleSign = () => {
    navigate4('/')
  }
  const navigate5 = useNavigate();
  const handleFuture = () => {
    navigate5('/futurefeatures')
  }

  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="viewmodal">
      <img className="viewmodal__menu" src={menu} alt='3 lines menu symbol' onClick={toggleModal} />
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

          <img src={menu2} alt="3 lines menu symbol" onClick={toggleModal} />
        </div>
      )}
    </div>
  );
}

export default MenuModal;