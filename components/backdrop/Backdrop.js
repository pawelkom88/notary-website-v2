import styles from "./Backdrop.module.css";

export default function Backdrop({ children, showModal, handleModal }) {
  return (
    <div
      className={`${showModal ? styles["overlay-active"] : ""} ${styles.overlay}`}
      onClick={handleModal}>
      {children}
    </div>
  );
}
