import { useState } from "react";
import NavMobile from "../navigation/nav-mobile/NavMobile";
import Logo from "../logo/Logo";
import styles from "./Hamburder.module.css";

export default function Hamburger() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(isShown => !isShown);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Logo />
        <div
          onClick={handleMenu}
          role="button"
          className={`${showMenu && styles["hamburger-open"]} ${styles.hamburger}`}
          tabIndex="0"
          aria-expanded="false"
          aria-label="show navigation menu">
          <span className={`${showMenu && styles["open"]} ${styles.line}`}></span>
          <span className={`${showMenu && styles["open"]} ${styles.line}`}></span>
          <span className={`${showMenu && styles["open"]} ${styles.line}`}></span>
        </div>
      </div>
      {showMenu && <NavMobile />}
    </>
  );
}
