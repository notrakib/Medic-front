import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./style/modal.module.css";

const Underlay = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <h1>Are you sure, you want to delete this appointment?</h1>
      <button onClick={props.onDelete}>Yes</button>
      <button onClick={props.onClick}>No</button>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Underlay onClick={props.onClick}></Underlay>,
        document.getElementById("underlay_root")
      )}
      {ReactDOM.createPortal(
        <Overlay onDelete={props.onDelete} onClick={props.onClick}></Overlay>,
        document.getElementById("overlay_root")
      )}
    </Fragment>
  );
};

export default Modal;
