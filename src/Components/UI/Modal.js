import { Fragment } from "react";
import classes from "../UI/Modal.module.css";
import  ReactDOM  from "react-dom";
const ModalOverLay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
