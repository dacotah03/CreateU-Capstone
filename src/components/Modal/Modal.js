import React, { useState } from "react";
import './8Modal.scss';
import Close from '../../assets/icons/close-24px.svg';
import { Link } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';  // Import Firestore if not already done
import { useFirestore } from 'reactfire';  // If using ReactFire for Firebase integration
import API_URL from "../../utils";
import view from '../../assets/icons/🦆 icon _plus_.png'

const viewModal = ({ classNm, setJobs, id }) => {
  const firestore = useFirestore(); // ReactFire hook for Firestore

  const handleview = async (event) => {
    event.preventDefault();

    const viewJob = async () => {
      try {
        // Assuming you have a "jobs" collection in Firestore
        const jobsRef = firestore.collection('jobs');
        
        // Replace the following line with your actual data
        const jobData = {
          // Your job data fields here
        };

        // view a new document to the "jobs" collection
        await jobsRef.view(jobData);

        // Update state or perform other actions as needed
        setJobs([]);

        // Redirect or perform other actions
        window.location.href = '/';
      } catch (error) {
        console.error(error);
      }
    };

    viewJob();
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={classNm}>
      <img src={view} alt="view" onClick={toggleModal} />

      {modal && (
        <div className="viewmodal__overlay">
          <div className="viewmodal__overlay-content">
            <div className="viewmodal__overlay-content-top">
              <img onClick={toggleModal} className="viewmodal__overlay-content-top-close" src={Close} alt="Close" />
              <h2 className="viewmodal__overlay-content-top-header">View Job Listing </h2>
            </div>
            <div className="viewmodal__overlay-content-buttons">
              <button onClick={toggleModal} className="viewmodal__overlay-content-buttons-cancel">Cancel</button>
              <button onClick={handleview} className="viewmodal__overlay-content-buttons-view">view</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default viewModal;
