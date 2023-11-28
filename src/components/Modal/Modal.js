import React, { useState } from "react";
import './DeleteModal.scss';
import Delete from '../../assets/icons/delete-icon.png';
import Close from '../../assets/icons/close-24px.svg';
import { Link } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';  // Import Firestore if not already done
import { useFirestore } from 'reactfire';  // If using ReactFire for Firebase integration
import API_URL from "../../utils";

const AddModal = ({ classNm, setJobs, id }) => {
  const firestore = useFirestore(); // ReactFire hook for Firestore

  const handleAdd = async (event) => {
    event.preventDefault();

    const addJob = async () => {
      try {
        // Assuming you have a "jobs" collection in Firestore
        const jobsRef = firestore.collection('jobs');
        
        // Replace the following line with your actual data
        const jobData = {
          // Your job data fields here
        };

        // Add a new document to the "jobs" collection
        await jobsRef.add(jobData);

        // Update state or perform other actions as needed
        setJobs([]);

        // Redirect or perform other actions
        window.location.href = '/';
      } catch (error) {
        console.error(error);
      }
    };

    addJob();
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={classNm}>
      <img src={Delete} alt="Delete" onClick={toggleModal} />

      {modal && (
        <div className="deletemodal__overlay">
          <div className="deletemodal__overlay-content">
            <div className="deletemodal__overlay-content-top">
              <img onClick={toggleModal} className="deletemodal__overlay-content-top-close" src={Close} alt="Close" />
              <h2 className="deletemodal__overlay-content-top-header">Delete Washington warehouse? </h2>
            </div>
            <div className="deletemodal__overlay-content-buttons">
              <button onClick={toggleModal} className="deletemodal__overlay-content-buttons-cancel">Cancel</button>
              <button onClick={handleAdd} className="deletemodal__overlay-content-buttons-delete">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddModal;
