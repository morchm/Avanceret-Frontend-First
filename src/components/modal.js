import ReactDOM from "react-dom";
import modalstyle from "../components/modal.module.scss";

const Modal = ({ moreTxt, isOpen, onClose }) => {

    if(!isOpen)return null; //Hvis den ikke er åben

    //En portal, som vi kan åbne hvor som helst vi vil på hjemmesiden. 
    return ReactDOM.createPortal (
        <div className={modalstyle.modal} id="modal">
            <div onClick={onClose} className={modalstyle.closeBtn}>X</div>
            <div>{moreTxt}</div>
        </div>, document.body
    )


}; //END const-modal

export default Modal;
