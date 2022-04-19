import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

//Pomocna f-ja za stavljanje ovih klasa u portal
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    //Ovako se radi ako se ne koristi React Portals
    // <React.Fragment>
    //   <Backdrop />
    //   <ModalOverlay>{props.children}</ModalOverlay>
    // </React.Fragment>

    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
