import { useState } from "react";
import Link from "next/link";
import Modal from "../../modal/Modal";
import styles from "./NavDesktop.module.css";
import Logo from "../../logo/Logo";

export default function NavDesktop() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(isShown => !isShown);
  }

  return (
    <>
      <nav className={styles["nav-bar"]}>
        <Logo />
        <ul className={styles["nav-links"]}>
          <li className={styles["nav-link"]}>
            <Link href="service">Notarial service</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link href="legislation">Apostille & Legislation</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link href="fees">Fees</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link href="legal">Regulatory</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link href="/#contact">Contact</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link href="blog">Blog</Link>
          </li>
        </ul>
        <button onClick={handleModal} type="button" className={`${styles["cta-btn"]} btn`}>
          Make an enquiry
        </button>
      </nav>
      <Modal showModal={showModal} handleModal={handleModal} />
    </>
  );
}
