import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalRoot = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalRoot)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>, portalRoot
            )}
        </React.Fragment>
    );
};

export default Modal;
