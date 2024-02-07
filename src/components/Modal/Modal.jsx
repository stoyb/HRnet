import React from 'react';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const Modal = ({ open, close }) => {
  
  return (
    
    <div className={open ? styles.modalContainerBlock : styles.modalContainerNone}>
      <div className={styles.modalContent}>
        <p>Employee created !</p>
        <FontAwesomeIcon icon={faCircleXmark} onClick={close} className={styles.modalButton}/>
      </div>
    </div>
  );
};

export default Modal;

