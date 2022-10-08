import Backdrop from "../backdrop/Backdrop";
import ContactForm from "../contact-form/ContactForm";
import FocusLock from "react-focus-lock";
import styles from "./Modal.module.css";

export default function Modal({ showModal, handleModal }) {
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleModal();
    }
  }

  return (
    <Backdrop handleModal={handleModal}>
      <FocusLock>
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className={`${showModal && styles["modal-active"]} ${styles.modal}`}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="dialog_label">
          <span
            onKeyDown={handleKeyDown}
            onClick={handleModal}
            className={styles.close}
            role="button"
            tabIndex="0">
            close
          </span>
          <h4 className="heading" id="dialog_label">
            Make an Enquiry
          </h4>
          <ContactForm />
        </div>
      </FocusLock>
    </Backdrop>
  );
}