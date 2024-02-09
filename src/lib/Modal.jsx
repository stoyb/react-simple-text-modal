import React from 'react';
import styles from './Modal.module.css';

export function Modal({ isOpen, handleClose, children }) {
  
  return (
    <>
    <div className={isOpen ? styles.modalContainerBlock : styles.modalContainerNone}>
      <div className={styles.modalContent}>
        <p className={styles.modalText}>{children}</p>
        <button onClick={handleClose} className={styles.modalButton}>X</button>
      </div>
    </div>
    </>
  );
};



