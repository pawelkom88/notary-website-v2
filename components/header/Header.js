import styles from "./Header.module.css";

export default function Header({ applyStyle, children }) {
  return <header className={` ${applyStyle ? styles.header : ""}`}>{children}</header>;
}
