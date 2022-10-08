import styles from "./Backdrop.module.css";

export default function Backdrop({ children, handleModal }) {
  return (
    <div className={styles.overlay} onClick={handleModal}>
      {children}
    </div>
  );
}
