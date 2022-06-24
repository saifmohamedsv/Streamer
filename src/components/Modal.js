import React from 'react';
import ReactDOM from "react-dom";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div
            onClick={props.onClose}
            className={"ui dimmer modals visible active"}
        >
            <div onClick={(e) => e.stopPropagation()} className={"ui standard modal visible active"}>
                <div className={"ui header"}>
                    {props.title}
                </div>
                <div className={"ui content"}>
                    <p>{props.message}</p>
                </div>
                <div className={"ui actions"}>
                    {props.actions()}
                </div>
            </div>
        </div>, document.getElementById('modal'))
};

export default Modal;